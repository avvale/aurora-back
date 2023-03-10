/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerGetJobsController } from './queue-manager-get-jobs.controller';
import { QueueManagerGetJobsHandler } from '../handlers/queue-manager-get-jobs.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerGetJobsController', () =>
{
    let controller: QueueManagerGetJobsController;
    let handler: QueueManagerGetJobsHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerGetJobsController,
            ],
            providers: [
                {
                    provide : QueueManagerGetJobsHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerGetJobsController>(QueueManagerGetJobsController);
        handler = module.get<QueueManagerGetJobsHandler>(QueueManagerGetJobsHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerGetJobsController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a jobs', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs)));
            expect(await controller.main()).toBe(jobs);
        });
    });
});