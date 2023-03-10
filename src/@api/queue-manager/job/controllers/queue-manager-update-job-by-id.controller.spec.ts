/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerUpdateJobByIdController } from './queue-manager-update-job-by-id.controller';
import { QueueManagerUpdateJobByIdHandler } from '../handlers/queue-manager-update-job-by-id.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerUpdateJobByIdController', () =>
{
    let controller: QueueManagerUpdateJobByIdController;
    let handler: QueueManagerUpdateJobByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerUpdateJobByIdController,
            ],
            providers: [
                {
                    provide : QueueManagerUpdateJobByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerUpdateJobByIdController>(QueueManagerUpdateJobByIdController);
        handler = module.get<QueueManagerUpdateJobByIdHandler>(QueueManagerUpdateJobByIdHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerUpdateJobByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a job updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await controller.main(jobs[0])).toBe(jobs[0]);
        });
    });
});