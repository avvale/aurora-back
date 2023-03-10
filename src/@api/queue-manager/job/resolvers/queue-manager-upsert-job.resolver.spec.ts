/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerUpsertJobResolver } from './queue-manager-upsert-job.resolver';
import { QueueManagerUpsertJobHandler } from '../handlers/queue-manager-upsert-job.handler';
import { QueueManagerUpdateJobByIdInput } from '@api/graphql';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerUpsertJobResolver', () =>
{
    let resolver: QueueManagerUpsertJobResolver;
    let handler: QueueManagerUpsertJobHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerUpsertJobResolver,
                {
                    provide : QueueManagerUpsertJobHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerUpsertJobResolver>(QueueManagerUpsertJobResolver);
        handler = module.get<QueueManagerUpsertJobHandler>(QueueManagerUpsertJobHandler);
    });

    test('QueueManagerUpsertJobResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerUpsertJobResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an job upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await resolver.main(<QueueManagerUpdateJobByIdInput>jobs[0])).toBe(jobs[0]);
        });
    });
});