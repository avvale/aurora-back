/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerFindJobController } from './queue-manager-find-job.controller';
import { QueueManagerFindJobHandler } from '../handlers/queue-manager-find-job.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerFindJobController', () =>
{
    let controller: QueueManagerFindJobController;
    let handler: QueueManagerFindJobHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerFindJobController,
            ],
            providers: [
                {
                    provide : QueueManagerFindJobHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerFindJobController>(QueueManagerFindJobController);
        handler = module.get<QueueManagerFindJobHandler>(QueueManagerFindJobHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerFindJobController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return a job', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await controller.main()).toBe(jobs[0]);
        });
    });
});