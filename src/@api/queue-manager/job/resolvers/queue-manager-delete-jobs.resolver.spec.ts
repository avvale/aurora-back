/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerDeleteJobsResolver } from './queue-manager-delete-jobs.resolver';
import { QueueManagerDeleteJobsHandler } from '../handlers/queue-manager-delete-jobs.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerDeleteJobsResolver', () =>
{
    let resolver: QueueManagerDeleteJobsResolver;
    let handler: QueueManagerDeleteJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerDeleteJobsResolver,
                {
                    provide : QueueManagerDeleteJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerDeleteJobsResolver>(QueueManagerDeleteJobsResolver);
        handler = module.get<QueueManagerDeleteJobsHandler>(QueueManagerDeleteJobsHandler);
    });

    test('QueueManagerDeleteJobsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerDeleteJobsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an jobs deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs)));
            expect(await resolver.main()).toBe(jobs);
        });
    });
});