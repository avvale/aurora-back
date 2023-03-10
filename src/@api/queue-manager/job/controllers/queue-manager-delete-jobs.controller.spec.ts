/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerDeleteJobsController } from './queue-manager-delete-jobs.controller';
import { QueueManagerDeleteJobsHandler } from '../handlers/queue-manager-delete-jobs.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerDeleteJobsController', () =>
{
    let controller: QueueManagerDeleteJobsController;
    let handler: QueueManagerDeleteJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerDeleteJobsController,
            ],
            providers: [
                {
                    provide : QueueManagerDeleteJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerDeleteJobsController>(QueueManagerDeleteJobsController);
        handler = module.get<QueueManagerDeleteJobsHandler>(QueueManagerDeleteJobsHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerDeleteJobsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an jobs deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs)));
            expect(await controller.main()).toBe(jobs);
        });
    });
});