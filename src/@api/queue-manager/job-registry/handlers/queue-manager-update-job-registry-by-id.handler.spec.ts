/* eslint-disable @typescript-eslint/no-unused-vars */
import { QueueManagerUpdateJobRegistryByIdHandler } from './queue-manager-update-job-registry-by-id.handler';
import { QueueManagerUpdateJobRegistryByIdInput } from '@api/graphql';
import { jobsRegistry } from '@app/queue-manager/job-registry/infrastructure/mock/mock-job-registry.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('QueueManagerUpdateJobRegistryByIdHandler', () =>
{
    let handler: QueueManagerUpdateJobRegistryByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                QueueManagerUpdateJobRegistryByIdHandler,
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

        handler = module.get<QueueManagerUpdateJobRegistryByIdHandler>(QueueManagerUpdateJobRegistryByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('QueueManagerUpdateJobRegistryByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('QueueManagerUpdateJobRegistryByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a jobRegistry updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(jobsRegistry[0])));
            expect(await handler.main(<QueueManagerUpdateJobRegistryByIdInput>jobsRegistry[0])).toBe(jobsRegistry[0]);
        });
    });
});