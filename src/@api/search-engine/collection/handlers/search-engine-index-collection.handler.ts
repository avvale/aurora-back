import { SearchEngineCollectionStatus } from '@api/graphql';
import { QueueManagerJobService } from '@api/queue-manager/shared/services';
import { SearchEngineFindCollectionByIdQuery, SearchEngineUpdateCollectionByIdCommand } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import * as _ from 'lodash';
import { QueueStorage } from 'src/app.queues';

@Injectable()
export class SearchEngineIndexCollectionHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly jobService: QueueManagerJobService,
        private readonly queryBus: IQueryBus,
        @InjectQueue(QueueStorage.SEARCH_ENGINE_COLLECTION) private searchEngineCollectionQueue: Queue,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<boolean>
    {
        const collection = await this.queryBus.ask(new SearchEngineFindCollectionByIdQuery(
            id,
            {},
            {
                timezone,
            },
        ));

        // create job to create delivery
        const collectionName = collection.alias + '_' + Utils.uuid();
        await this.jobService.add(
            this.searchEngineCollectionQueue,
            {
                payload: {
                    id,             // collection id
                    offset: 0,      // start from 0
                    limit : 1000,   // take 1000 items
                    collectionName, // new collection name that will be replaced with alias
                    constraint,
                },
                timezone,
            },
            [collectionName],
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

        await this.commandBus.dispatch(new SearchEngineUpdateCollectionByIdCommand(
            {
                id,
                status: SearchEngineCollectionStatus.INDEXING,
            },
            constraint,
            {
                timezone,
            },
        ));

        return true;
    }
}