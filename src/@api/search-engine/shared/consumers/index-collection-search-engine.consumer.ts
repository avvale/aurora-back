import { SearchEngineCollectionStatus } from '@api/graphql';
import { QueueManagerJobService } from '@api/queue-manager/shared/services';
import { SearchEngineFindCollectionByIdQuery, SearchEngineUpdateCollectionByIdCommand } from '@app/search-engine';
import { AuroraMetadataRegistry, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { TypesenseMetadataRegistry } from '@aurorajs.dev/typesense';
import { InjectQueue, Process, Processor } from '@nestjs/bull';
import { Job, Queue } from 'bull';
import * as _ from 'lodash';
import { QueueStorage } from 'src/app.queues';
import { Client } from 'typesense';

@Processor(QueueStorage.SEARCH_ENGINE_COLLECTION)
export class IndexCollectionSearchEngineConsumer
{
    constructor(
        private readonly auroraMetadataRegistry: AuroraMetadataRegistry,
        private readonly commandBus: ICommandBus,
        private readonly jobService: QueueManagerJobService,
        private readonly queryBus: IQueryBus,
        private readonly typesense: Client,
        private readonly typesenseMetadataRegistry: TypesenseMetadataRegistry,
        @InjectQueue(QueueStorage.SEARCH_ENGINE_COLLECTION) private searchEngineCollectionQueue: Queue,
    ) {}

    @Process('indexCollection')
    async main(job: Job<{
        payload: {
            id: string;
            offset: number;
            limit: number;
            collectionName: string;
            constraint: QueryStatement;
        };
        timezone: string;
    }>): Promise<void>
    {
        const { payload, timezone } = job.data;
        const collection = await this.queryBus.ask(new SearchEngineFindCollectionByIdQuery(
            payload.id,
            {
                include: [
                    {
                        association: 'fields',
                    },
                ],
            },
            {
                timezone,
            },
        ));

        // check if collection exists
        try
        {
            // eslint-disable-next-line no-await-in-loop
            await this.typesense
                .collections(payload.collectionName)
                .retrieve();
        }
        catch (error)
        {
            if ((error as any).httpStatus === 404)
            {
                const schema = this.typesenseMetadataRegistry
                    .getSchemaByName(collection.name);

                // create new collection
                await this.typesense.collections()
                    .create({
                        ...schema,
                        name: payload.collectionName,
                    });
            }
        }

        const auroraMetadata = this.auroraMetadataRegistry.getSchemaByAggregateName(
            collection.alias.endsWith('Schema') ? collection.alias.slice(0, -6) : collection.alias,
        );

        // dynamic import
        const imports = await import(`../../../../@app/${auroraMetadata.boundedContextName}/${auroraMetadata.moduleName}`);

        // get pagination query
        const paginationQuery = await this.queryBus.ask(
            new imports[`${auroraMetadata.boundedContextName.toPascalCase()}Paginate${auroraMetadata.moduleNames.toPascalCase()}Query`](
                {},
                payload.constraint,
                {
                    timezone,
                },
            ),
        );

        if (paginationQuery.rows.length === 0)
        {
            // update collection alias
            await this.typesense
                .aliases()
                .upsert(
                    collection.alias,
                    {
                        // eslint-disable-next-line camelcase
                        collection_name: payload.collectionName,
                    },
                );

            // delete old collection
            this.typesense
                .collections(collection.name)
                .delete();

            // update collection with new collection name
            await this.commandBus.dispatch(new SearchEngineUpdateCollectionByIdCommand(
                {
                    id    : payload.id,
                    name  : payload.collectionName,
                    status: SearchEngineCollectionStatus.CONSOLIDATED,
                },
                {},
                {
                    timezone,
                },
            ));

            return;
        }

        // index documents
        this.typesense
            .collections(payload.collectionName)
            .documents()
            .import(
                // filter collection fields
                paginationQuery.rows
                    .map(row => _.pick(row, ['id', ...collection.fields.map(field => field.name)])),
                {
                    action: 'create',
                },
            );

        // create job for next batch
        await this.jobService.add(
            this.searchEngineCollectionQueue,
            {
                payload: {
                    ...payload,
                    offset: payload.offset + payload.limit,
                },
                timezone,
            },
            [payload.collectionName],
            'indexCollection',
            {
                delay   : 5000,             // delay in ms
                attempts: 3,                // times to retry
                backoff : {
                    type : 'exponential',   // each fail will increase the delay, formula: Math.round((Math.pow(2, attemptsMade) - 1) * delay);
                    delay: 10000,           // delay in ms
                },
            },
        );
    }
}