/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { oAuthMockApplicationClientData } from '@app/o-auth/application-client/infrastructure/mock/o-auth-mock-application-client.data';
import { OAuthUpsertApplicationClientService } from './o-auth-upsert-application-client.service';
import {
    OAuthApplicationClientApplicationId,
    OAuthApplicationClientClientId,
} from '../../domain/value-objects';
import { OAuthIApplicationClientRepository } from '../../domain/o-auth-application-client.repository';
import { OAuthMockApplicationClientRepository } from '../../infrastructure/mock/o-auth-mock-application-client.repository';

describe('OAuthUpsertApplicationClientService', () =>

{
    let service: OAuthUpsertApplicationClientService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                OAuthUpsertApplicationClientService,
                OAuthMockApplicationClientRepository,
                {
                    provide : OAuthIApplicationClientRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(OAuthUpsertApplicationClientService);
    });

    describe('main', () =>
    {
        test('OAuthUpsertApplicationClientService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a applicationClient and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        applicationId: new OAuthApplicationClientApplicationId(oAuthMockApplicationClientData[0].applicationId),
                        clientId: new OAuthApplicationClientClientId(oAuthMockApplicationClientData[0].clientId),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
