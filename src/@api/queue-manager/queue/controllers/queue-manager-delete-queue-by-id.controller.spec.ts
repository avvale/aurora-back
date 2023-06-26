/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueueManagerDeleteQueueByIdHandler } from '../handlers/queue-manager-delete-queue-by-id.handler';
import { QueueManagerDeleteQueueByIdController } from './queue-manager-delete-queue-by-id.controller';
import { queues } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.data';
import { Test, TestingModule } from '@nestjs/testing';

describe('QueueManagerDeleteQueueByIdController', () =>
{
    let controller: QueueManagerDeleteQueueByIdController;
    let handler: QueueManagerDeleteQueueByIdHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            controllers: [
                QueueManagerDeleteQueueByIdController,
            ],
            providers: [
                {
                    provide : QueueManagerDeleteQueueByIdHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        controller = module.get<QueueManagerDeleteQueueByIdController>(QueueManagerDeleteQueueByIdController);
        handler = module.get<QueueManagerDeleteQueueByIdHandler>(QueueManagerDeleteQueueByIdHandler);
    });

    describe('main', () =>
    {
        test('QueueManagerDeleteQueueByIdController should be defined', () =>
        {
            expect(controller).toBeDefined();
        });

        test('should return an queue deleted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(queues[0])));
            expect(await controller.main(queues[0].id)).toBe(queues[0]);
        });
    });
});