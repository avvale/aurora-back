/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerUpdateJobsResolver } from './queue-manager-update-jobs.resolver';
import { QueueManagerUpdateJobsHandler } from '../handlers/queue-manager-update-jobs.handler';
import { QueueManagerUpdateJobsInput } from '@api/graphql';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerUpdateJobsResolver', () =>
{
    let resolver: QueueManagerUpdateJobsResolver;
    let handler: QueueManagerUpdateJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerUpdateJobsResolver,
                {
                    provide : QueueManagerUpdateJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerUpdateJobsResolver>(QueueManagerUpdateJobsResolver);
        handler = module.get<QueueManagerUpdateJobsHandler>(QueueManagerUpdateJobsHandler);
    });

    test('QueueManagerUpdateJobsResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerUpdateJobsResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a jobs updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await resolver.main(<QueueManagerUpdateJobsInput>jobs[0])).toBe(jobs[0]);
        });
    });
});