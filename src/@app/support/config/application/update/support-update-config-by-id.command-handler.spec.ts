import {
    supportMockConfigData,
    SupportUpdateConfigByIdCommand,
} from '@app/support/config';
import { SupportUpdateConfigByIdCommandHandler } from '@app/support/config/application/update/support-update-config-by-id.command-handler';
import { SupportUpdateConfigByIdService } from '@app/support/config/application/update/support-update-config-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportUpdateConfigByIdCommandHandler', () => {
    let commandHandler: SupportUpdateConfigByIdCommandHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportUpdateConfigByIdCommandHandler,
                {
                    provide: SupportUpdateConfigByIdService,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        commandHandler = module.get<SupportUpdateConfigByIdCommandHandler>(
            SupportUpdateConfigByIdCommandHandler,
        );
    });

    describe('main', () => {
        test('UpdateConfigByIdCommandHandler should be defined', () => {
            expect(commandHandler).toBeDefined();
        });

        test('should return an config created', async () => {
            expect(
                await commandHandler.execute(
                    new SupportUpdateConfigByIdCommand(
                        {
                            id: supportMockConfigData[0].id,
                            rowId: supportMockConfigData[0].rowId,
                            apiKey: supportMockConfigData[0].apiKey,
                            listId: supportMockConfigData[0].listId,
                        },
                        {},
                        { timezone: process.env.TZ },
                    ),
                ),
            ).toBe(undefined);
        });
    });
});
