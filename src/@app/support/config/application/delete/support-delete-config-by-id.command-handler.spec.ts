import {
    SupportDeleteConfigByIdCommand,
    supportMockConfigData,
} from '@app/support/config';
import { SupportDeleteConfigByIdCommandHandler } from '@app/support/config/application/delete/support-delete-config-by-id.command-handler';
import { SupportDeleteConfigByIdService } from '@app/support/config/application/delete/support-delete-config-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportDeleteConfigByIdCommandHandler', () => {
    let commandHandler: SupportDeleteConfigByIdCommandHandler;

    beforeAll(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportDeleteConfigByIdCommandHandler,
                {
                    provide: SupportDeleteConfigByIdService,
                    useValue: {
                        main: () => {
                            /**/
                        },
                    },
                },
            ],
        }).compile();

        commandHandler = module.get<SupportDeleteConfigByIdCommandHandler>(
            SupportDeleteConfigByIdCommandHandler,
        );
    });

    describe('main', () => {
        test('SupportDeleteConfigByIdCommandHandler should be defined', () => {
            expect(commandHandler).toBeDefined();
        });

        test('should create the value object id and pass them as parameters to the SupportDeleteConfigByIdService', async () => {
            expect(
                await commandHandler.execute(
                    new SupportDeleteConfigByIdCommand(
                        supportMockConfigData[0].id,
                    ),
                ),
            ).toBe(undefined);
        });
    });
});
