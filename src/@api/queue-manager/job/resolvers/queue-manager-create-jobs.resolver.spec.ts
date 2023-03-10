import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerCreateJobsResolver } from './queue-manager-create-jobs.resolver';
import { QueueManagerCreateJobsHandler } from '../handlers/queue-manager-create-jobs.handler';
import { QueueManagerCreateJobInput } from '@api/graphql';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerCreateJobsResolver', () =>
{
    let resolver: QueueManagerCreateJobsResolver;
    let handler: QueueManagerCreateJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                QueueManagerCreateJobsResolver,
                {
                    provide : QueueManagerCreateJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerCreateJobsResolver>(QueueManagerCreateJobsResolver);
        handler = module.get<QueueManagerCreateJobsHandler>(QueueManagerCreateJobsHandler);
    });

    test('QueueManagerCreateJobsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerCreateJobsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an jobs created', async () =>
        {
            expect(await resolver.main(<QueueManagerCreateJobInput[]>jobs)).toBe(undefined);
        });
    });
});