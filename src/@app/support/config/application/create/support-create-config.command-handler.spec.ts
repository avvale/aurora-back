import {
    SupportCreateConfigCommand,
    supportMockConfigData,
} from '@app/support/config';
import { Test, TestingModule } from '@nestjs/testing';
import { SupportCreateConfigCommandHandler } from './support-create-config.command-handler';
import { SupportCreateConfigService } from './support-create-config.service';

describe('SupportCreateConfigCommandHandler', () => {
    let commandHandler: SupportCreateConfigCommandHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportCreateConfigCommandHandler,
                {
                    provide: SupportCreateConfigService,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        commandHandler = module.get<SupportCreateConfigCommandHandler>(
            SupportCreateConfigCommandHandler,
        );
    });

    describe('main', () => {
        test('CreateConfigCommandHandler should be defined', () => {
            expect(commandHandler).toBeDefined();
        });

        test('should create the values objects and pass them as parameters to the SupportCreateConfigService', async () => {
            expect(
                await commandHandler.execute(
                    new SupportCreateConfigCommand(
                        {
                            id: supportMockConfigData[0].id,
                            rowId: supportMockConfigData[0].rowId,
                            apiKey: supportMockConfigData[0].apiKey,
                            listId: supportMockConfigData[0].listId,
                        },
                        { timezone: process.env.TZ },
                    ),
                ),
            ).toBe(undefined);
        });
    });
});
