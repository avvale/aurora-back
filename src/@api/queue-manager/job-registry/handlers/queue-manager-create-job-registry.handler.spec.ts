/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueueManagerCreateJobRegistryHandler } from './queue-manager-create-job-registry.handler';
import { jobsRegistry } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('QueueManagerCreateJobRegistryHandler', () =>
{
    let handler: QueueManagerCreateJobRegistryHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerCreateJobRegistryHandler,
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

        handler = module.get<QueueManagerCreateJobRegistryHandler>(QueueManagerCreateJobRegistryHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    describe('main', () =>
    {
        test('QueueManagerCreateJobRegistryHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return an jobRegistry created', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(jobsRegistry[0])));
            expect(await handler.main(jobsRegistry[0])).toBe(jobsRegistry[0]);
        });
    });
});