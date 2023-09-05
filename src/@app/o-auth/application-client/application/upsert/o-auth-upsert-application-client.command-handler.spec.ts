import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { oAuthMockApplicationClientData } from '@app/o-auth/application-client/infrastructure/mock/o-auth-mock-application-client.data';
import { OAuthUpsertApplicationClientCommandHandler } from './o-auth-upsert-application-client.command-handler';
import { OAuthUpsertApplicationClientCommand } from './o-auth-upsert-application-client.command';
import { OAuthUpsertApplicationClientService } from './o-auth-upsert-application-client.service';

describe('OAuthUpsertApplicationClientCommandHandler', () =>
{
    let commandHandler: OAuthUpsertApplicationClientCommandHandler;
    let service: OAuthUpsertApplicationClientService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                OAuthUpsertApplicationClientCommandHandler,
                {
                    provide : OAuthUpsertApplicationClientService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<OAuthUpsertApplicationClientCommandHandler>(OAuthUpsertApplicationClientCommandHandler);
        service = module.get<OAuthUpsertApplicationClientService>(OAuthUpsertApplicationClientService);
    });

    describe('main', () =>
    {
        test('UpsertApplicationClientCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the OAuthUpsertApplicationClientService', async () =>
        {
            expect(await commandHandler.execute(
                new OAuthUpsertApplicationClientCommand(
                    {
                        applicationId: oAuthMockApplicationClientData[0].applicationId,
                        clientId: oAuthMockApplicationClientData[0].clientId,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
