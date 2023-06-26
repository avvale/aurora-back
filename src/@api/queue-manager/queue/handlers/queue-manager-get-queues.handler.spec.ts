/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueueManagerGetQueuesHandler } from './queue-manager-get-queues.handler';
import { queues } from '@app/queue-manager/queue/infrastructure/mock/mock-queue.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('QueueManagerGetQueuesHandler', () =>
{
    let handler: QueueManagerGetQueuesHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerGetQueuesHandler,
                {
                    provide : IQueryBus,
                    useValue: {
                        ask: () => { /**/ },
                    },
                },
                {
                    provide : ICommandBus,
                    useValue: {
                        dispatch: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        handler = module.get<QueueManagerGetQueuesHandler>(QueueManagerGetQueuesHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('QueueManagerGetQueuesHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerGetQueuesHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a queues', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(queues)));
            expect(await handler.main()).toBe(queues);
        });
    });
});