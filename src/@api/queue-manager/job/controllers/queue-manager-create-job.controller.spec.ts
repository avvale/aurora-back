/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { QueueManagerCreateJobController } from './queue-manager-create-job.controller';
import { QueueManagerCreateJobHandler } from '../handlers/queue-manager-create-job.handler';

// sources
import { jobs } from '@app/queue-manager/job/infrastructure/mock/mock-job.data';

describe('QueueManagerCreateJobController', () =>
{
    let controller: QueueManagerCreateJobController;
    let handler: QueueManagerCreateJobHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerCreateJobController,
            ],
            providers: [
                {
                    provide : QueueManagerCreateJobHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerCreateJobController>(QueueManagerCreateJobController);
        handler = module.get<QueueManagerCreateJobHandler>(QueueManagerCreateJobHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerCreateJobController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an job created', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(jobs[0])));
            expect(await controller.main(jobs[0])).toBe(jobs[0]);
        });
    });
});