/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerFindJobResolver } from './queue-manager-find-job.resolver';
import { QueueManagerFindJobHandler } from '../handlers/queue-manager-find-job.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerFindJobResolver', () =>
{
    let resolver: QueueManagerFindJobResolver;
    let handler: QueueManagerFindJobHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerFindJobResolver,
                {
                    provide : QueueManagerFindJobHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerFindJobResolver>(QueueManagerFindJobResolver);
        handler = module.get<QueueManagerFindJobHandler>(QueueManagerFindJobHandler);
    });

    test('QueueManagerFindJobResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerFindJobResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return a job', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await resolver.main()).toBe(jobs[0]);
        });
    });
});