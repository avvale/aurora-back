/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerDeleteJobByIdResolver } from './queue-manager-delete-job-by-id.resolver';
import { QueueManagerDeleteJobByIdHandler } from '../handlers/queue-manager-delete-job-by-id.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerDeleteJobByIdResolver', () =>
{
    let resolver: QueueManagerDeleteJobByIdResolver;
    let handler: QueueManagerDeleteJobByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerDeleteJobByIdResolver,
                {
                    provide : QueueManagerDeleteJobByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<QueueManagerDeleteJobByIdResolver>(QueueManagerDeleteJobByIdResolver);
        handler = module.get<QueueManagerDeleteJobByIdHandler>(QueueManagerDeleteJobByIdHandler);
    });

    test('QueueManagerDeleteJobByIdResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerDeleteJobByIdResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an job deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await resolver.main(jobs[0].id)).toBe(jobs[0]);
        });
    });
});