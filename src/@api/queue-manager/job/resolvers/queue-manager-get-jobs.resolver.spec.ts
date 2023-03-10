/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerGetJobsResolver } from './queue-manager-get-jobs.resolver';
import { QueueManagerGetJobsHandler } from '../handlers/queue-manager-get-jobs.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerGetJobsResolver', () =>
{
    let resolver: QueueManagerGetJobsResolver;
    let handler: QueueManagerGetJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerGetJobsResolver,
                {
                    provide : QueueManagerGetJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerGetJobsResolver>(QueueManagerGetJobsResolver);
        handler = module.get<QueueManagerGetJobsHandler>(QueueManagerGetJobsHandler);
    });

    test('QueueManagerGetJobsResolver should be defined', () =>
    {
        expect(resolver).   toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerGetJobsResolver should be defined', () =>
        {
            expect(resolver).   toBeDefined();
        });

        test('should return a jobs', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs)));
            expect(await resolver.main()).toBe(jobs);
        });
    });
});