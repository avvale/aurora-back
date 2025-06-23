import { toolsMockProcedureData, ToolsUpdateProcedureByIdCommand } from '@app/tools/procedure';
import { ToolsUpdateProcedureByIdCommandHandler } from '@app/tools/procedure/application/update/tools-update-procedure-by-id.command-handler';
import { ToolsUpdateProcedureByIdService } from '@app/tools/procedure/application/update/tools-update-procedure-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('ToolsUpdateProcedureByIdCommandHandler', () =>
{
    let commandHandler: ToolsUpdateProcedureByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                ToolsUpdateProcedureByIdCommandHandler,
                {
                    provide : ToolsUpdateProcedureByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<ToolsUpdateProcedureByIdCommandHandler>(ToolsUpdateProcedureByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateProcedureByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an procedure created', async () =>
        {
            expect(await commandHandler.execute(
                new ToolsUpdateProcedureByIdCommand(
                    {
                        id: toolsMockProcedureData[0].id,
                        name: toolsMockProcedureData[0].name,
                        type: toolsMockProcedureData[0].type,
                        version: toolsMockProcedureData[0].version,
                        isActive: toolsMockProcedureData[0].isActive,
                        upScript: toolsMockProcedureData[0].upScript,
                        downScript: toolsMockProcedureData[0].downScript,
                        executedAt: toolsMockProcedureData[0].executedAt,
                        checkedAt: toolsMockProcedureData[0].checkedAt,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
