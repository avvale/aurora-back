/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerUpdateJobsController } from './queue-manager-update-jobs.controller';
import { QueueManagerUpdateJobsHandler } from '../handlers/queue-manager-update-jobs.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerUpdateJobsController', () =>
{
    let controller: QueueManagerUpdateJobsController;
    let handler: QueueManagerUpdateJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerUpdateJobsController,
            ],
            providers: [
                {
                    provide : QueueManagerUpdateJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerUpdateJobsController>(QueueManagerUpdateJobsController);
        handler = module.get<QueueManagerUpdateJobsHandler>(QueueManagerUpdateJobsHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerUpdateJobsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a jobs updated', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await controller.main(jobs[0])).toBe(jobs[0]);
        });
    });
});