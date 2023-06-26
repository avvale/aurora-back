import { Injectable } from '@nestjs/common';
import { MockSeeder } from '@aurorajs.dev/core';
import {
    QueueManagerJobRegistryId,
    QueueManagerJobRegistryQueueName,
    QueueManagerJobRegistryState,
    QueueManagerJobRegistryJobId,
    QueueManagerJobRegistryJobName,
    QueueManagerJobRegistryTags,
    QueueManagerJobRegistryCreatedAt,
    QueueManagerJobRegistryUpdatedAt,
    QueueManagerJobRegistryDeletedAt,
} from '../../domain/value-objects';
import { QueueManagerJobRegistry } from '../../domain/queue-manager-job-registry.aggregate';
import { jobsRegistry } from './mock-job-registry.data';
import * as _ from 'lodash';

@Injectable()
export class MockJobRegistrySeeder extends MockSeeder<QueueManagerJobRegistry>
{
    public collectionSource: QueueManagerJobRegistry[];

    constructor()
    {
        super();
        this._createMockDataLang();
    }

    private _createMockDataLang(): void
    {
        this.collectionSource = [];

        for (const jobRegistry of _.orderBy(jobsRegistry, ['id']))
        {
            this.collectionSource.push(
                QueueManagerJobRegistry.register(
                    new QueueManagerJobRegistryId(jobRegistry.id),
                    new QueueManagerJobRegistryQueueName(jobRegistry.queueName),
                    new QueueManagerJobRegistryState(jobRegistry.state),
                    new QueueManagerJobRegistryJobId(jobRegistry.jobId),
                    new QueueManagerJobRegistryJobName(jobRegistry.jobName),
                    new QueueManagerJobRegistryTags(jobRegistry.tags),
                    new QueueManagerJobRegistryCreatedAt({ currentTimestamp: true }),
                    new QueueManagerJobRegistryUpdatedAt({ currentTimestamp: true }),
                    new QueueManagerJobRegistryDeletedAt(null),
                ),
            );
        }
    }
}