import { Injectable } from '@nestjs/common';
import { MockSeeder } from '@aurorajs.dev/core';
import {
    QueueManagerQueueId,
    QueueManagerQueuePrefix,
    QueueManagerQueueName,
    QueueManagerQueueCreatedAt,
    QueueManagerQueueUpdatedAt,
    QueueManagerQueueDeletedAt,
} from '../../domain/value-objects';
import { QueueManagerQueue } from '../../domain/queue-manager-queue.aggregate';
import { queueManagerQueues } from './queue-manager-mock-queue.data';
import * as _ from 'lodash';

@Injectable()
export class QueueManagerMockQueueSeeder extends MockSeeder<QueueManagerQueue>
{
    public collectionSource: QueueManagerQueue[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const queue of _.orderBy(queueManagerQueues, ['id']))
        {
            this.collectionSource.push(
                QueueManagerQueue.register(
                    new QueueManagerQueueId(queue.id),
                    new QueueManagerQueuePrefix(queue.prefix),
                    new QueueManagerQueueName(queue.name),
                    new QueueManagerQueueCreatedAt({ currentTimestamp: true }),
                    new QueueManagerQueueUpdatedAt({ currentTimestamp: true }),
                    new QueueManagerQueueDeletedAt(null),
                ),
            );
        }
    }
}