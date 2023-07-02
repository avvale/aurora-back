/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { AuditingUpsertHttpCommunicationResolver } from './auditing-upsert-http-communication.resolver';
import { AuditingUpsertHttpCommunicationHandler } from '../handlers/auditing-upsert-http-communication.handler';
import { AuditingUpdateHttpCommunicationByIdInput } from '@api/graphql';

// sources
import { auditingMockHttpCommunicationData } from '@app/auditing/http-communication/infrastructure/mock/auditing-mock-http-communication.data';

describe('AuditingUpsertHttpCommunicationResolver', () =>
{
    let resolver: AuditingUpsertHttpCommunicationResolver;
    let handler: AuditingUpsertHttpCommunicationHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
            ],
            providers: [
                AuditingUpsertHttpCommunicationResolver,
                {
                    provide : AuditingUpsertHttpCommunicationHandler,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        resolver = module.get<AuditingUpsertHttpCommunicationResolver>(AuditingUpsertHttpCommunicationResolver);
        handler = module.get<AuditingUpsertHttpCommunicationHandler>(AuditingUpsertHttpCommunicationHandler);
    });

    test('AuditingUpsertHttpCommunicationResolver should be defined', () =>
    {
        expect(resolver).toBeDefined();
    });

    describe('main', () =>
    {
        test('AuditingUpsertHttpCommunicationResolver should be defined', () =>
        {
            expect(resolver).toBeDefined();
        });

        test('should return an httpCommunication upserted', async () =>
        {
            jest.spyOn(handler, 'main').mockImplementation(() => new Promise(resolve => resolve(auditingMockHttpCommunicationData[0])));
            expect(await resolver.main(<AuditingUpdateHttpCommunicationByIdInput>auditingMockHttpCommunicationData[0])).toBe(auditingMockHttpCommunicationData[0]);
        });
    });
});