/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuditingPaginateHttpCommunicationsHandler } from './auditing-paginate-http-communications.handler';
import { auditingMockHttpCommunicationData } from '@app/auditing/http-communication/infrastructure/mock/auditing-mock-http-communication.data';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Test, TestingModule } from '@nestjs/testing';

describe('AuditingPaginateHttpCommunicationsHandler', () =>
{
    let handler: AuditingPaginateHttpCommunicationsHandler;
    let queryBus: IQueryBus;
    let commandBus: ICommandBus;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AuditingPaginateHttpCommunicationsHandler,
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

        handler = module.get<AuditingPaginateHttpCommunicationsHandler>(AuditingPaginateHttpCommunicationsHandler);
        queryBus = module.get<IQueryBus>(IQueryBus);
        commandBus = module.get<ICommandBus>(ICommandBus);
    });

    test('AuditingPaginateHttpCommunicationsHandler should be defined', () =>
    {
        expect(handler).toBeDefined();
    });

    describe('main', () =>
    {
        test('AuditingPaginateHttpCommunicationsHandler should be defined', () =>
        {
            expect(handler).toBeDefined();
        });

        test('should return a httpCommunications', async () =>
        {
            jest.spyOn(queryBus, 'ask').mockImplementation(() => new Promise(resolve => resolve({
                total: auditingMockHttpCommunicationData.length,
                count: auditingMockHttpCommunicationData.length,
                rows : auditingMockHttpCommunicationData,
            })));
            expect(await handler.main()).toEqual({
                total: auditingMockHttpCommunicationData.length,
                count: auditingMockHttpCommunicationData.length,
                rows : auditingMockHttpCommunicationData,
            });
        });
    });
});