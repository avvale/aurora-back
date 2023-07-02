/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuditingUpdateHttpCommunicationByIdHandler } from './auditing-update-http-communication-by-id.handler';
import { AuditingUpdateHttpCommunicationByIdInput } from '@api/graphql';
import { auditingMockHttpCommunicationData } from '@app/auditing/http-communication/infrastructure/mock/auditing-mock-http-communication.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AuditingUpdateHttpCommunicationByIdHandler', () =>
{
    let handler: AuditingUpdateHttpCommunicationByIdHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AuditingUpdateHttpCommunicationByIdHandler,
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

        handler = module.get<AuditingUpdateHttpCommunicationByIdHandler>(AuditingUpdateHttpCommunicationByIdHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AuditingUpdateHttpCommunicationByIdHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AuditingUpdateHttpCommunicationByIdHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a httpCommunication updated', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve(auditingMockHttpCommunicationData[0])));
            expect(await handler.main(<AuditingUpdateHttpCommunicationByIdInput>auditingMockHttpCommunicationData[0])).toBe(auditingMockHttpCommunicationData[0]);
        });
    });
});