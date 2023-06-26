import { QueueManagerJobService } from '@api/queue-manager/shared/services';
import { SearchEngineFindCollectionByIdQuery } from '@app/search-engine/collection';
import { ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { QueueStorage } from 'src/app.queues';

@Injectable()
export class SearchEngineIndexCollectionHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly jobService: QueueManagerJobService,
        @InjectQueue(QueueStorage.SEARCH_ENGINE_COLLECTION) private searchEngineCollectionQueue: Queue,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<boolean>
    {
        // coding here
        const collection = await this.commandBus.dispatch(new SearchEngineFindCollectionByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        // create job to create delivery
        await this.jobService.add(
            this.searchEngineCollectionQueue,
            {
                payload: {
                    id,
                    offset        : 0,
                    limit         : 1000,
                    collectionName: collection.name + '_' + Utils.uuid(),
                },
                timezone,
            },
            [collection.name],
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

        return true;
    }
}