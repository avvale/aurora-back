/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerUpdateJobByIdResolver } from './queue-manager-update-job-by-id.resolver';
import { QueueManagerUpdateJobByIdHandler } from '../handlers/queue-manager-update-job-by-id.handler';
import { QueueManagerUpdateJobByIdInput } from '@api/graphql';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerUpdateJobByIdResolver', () =>
{
    let resolver: QueueManagerUpdateJobByIdResolver;
    let handler: QueueManagerUpdateJobByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerUpdateJobByIdResolver,
                {
                    provide : QueueManagerUpdateJobByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerUpdateJobByIdResolver>(QueueManagerUpdateJobByIdResolver);
        handler = module.get<QueueManagerUpdateJobByIdHandler>(QueueManagerUpdateJobByIdHandler);
    });

    test('QueueManagerUpdateJobByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerUpdateJobByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a job by id updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await resolver.main(<QueueManagerUpdateJobByIdInput>jobs[0])).toBe(jobs[0]);
        });
    });
});