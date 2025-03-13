
import { Injectable, Logger } from '@nestjs/common';
import { ICommandBus, Utils } from '@aurorajs.dev/core';
import { Client } from 'typesense';
import { SearchEngineCreateCollectionsCommand, SearchEngineDeleteCollectionsCommand } from '@app/search-engine/collection';
import { SearchEngineCreateFieldsCommand, SearchEngineDeleteFieldsCommand } from '@app/search-engine/field';
import { SearchEngineCollectionStatus } from '@api/graphql';

@Injectable()
export class SearchEngineTypesenseImplementationService
{
    private readonly logger = new Logger(SearchEngineTypesenseImplementationService.name);

    constructor(
        private readonly commandBus: ICommandBus,
        private readonly typeSenseClient: Client,
    )
    {}

    async onApplicationBootstrap(): Promise<void>
    {
        const collections = await this.typeSenseClient.collections().retrieve();
        const aliases     = await this.typeSenseClient.aliases().retrieve();

        const collectionsPayload = [];
        const fieldsPayload = [];
        for (const collection of collections)
        {
            const collectionId = Utils.uuid(collection.name);


            const alias = aliases.aliases.find(alias => alias.collection_name === collection.name);

            collectionsPayload.push({
                id                : collectionId,
                name              : collection.name,
                alias             : alias?.name || null,
                status            : SearchEngineCollectionStatus.CONSOLIDATED,
                documentsNumber   : collection.num_documents,
                // defaultSortingField : collection.default_sorting_field,
                numMemoryShards   : collection.num_memory_shards,
                timestampCreatedAt: collection.created_at,
                // isEnableNestedFields: collection.enable_nested_fields,
            });

            for (const field of collection.fields)
            {
                fieldsPayload.push({
                    id        : Utils.uuid(),
                    collectionId,
                    name      : field.name,
                    type      : field.type,
                    isNullable: field.optional,
                });
            }
        }

        // clean queues table
        await this.commandBus.dispatch(new SearchEngineDeleteCollectionsCommand({
            where: {},
        }));

        await this.commandBus.dispatch(new SearchEngineDeleteFieldsCommand({
            where: {},
        }));

        // create existing queues in redis
        await this.commandBus.dispatch(new SearchEngineCreateCollectionsCommand(
            collectionsPayload,
        ));

        // create existing queues in redis
        await this.commandBus.dispatch(new SearchEngineCreateFieldsCommand(
            fieldsPayload,
        ));

        this.logger.log('Collections and fields created successfully');
    }

    async delete(schemaName: string): Promise<void>
    {
        try
        {
            await this.typeSenseClient.collections(schemaName).retrieve();
        }
        catch (error)
        {
            if ((error).httpStatus === 404)
            {
                this.logger.warn(`Collection ${schemaName} not found to be deleted in Typesense server`);
            }
        }

        await this.typeSenseClient.collections(schemaName).delete();
    }
}