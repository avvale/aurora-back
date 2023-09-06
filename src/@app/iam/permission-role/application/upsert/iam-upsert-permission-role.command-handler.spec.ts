import { Test, TestingModule } from '@nestjs/testing';

// custom items
import { iamMockPermissionRoleData } from '@app/iam/permission-role/infrastructure/mock/iam-mock-permission-role.data';
import { IamUpsertPermissionRoleCommandHandler } from './iam-upsert-permission-role.command-handler';
import { IamUpsertPermissionRoleCommand } from './iam-upsert-permission-role.command';
import { IamUpsertPermissionRoleService } from './iam-upsert-permission-role.service';

describe('IamUpsertPermissionRoleCommandHandler', () =>
{
    let commandHandler: IamUpsertPermissionRoleCommandHandler;
    let service: IamUpsertPermissionRoleService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                IamUpsertPermissionRoleCommandHandler,
                {
                    provide : IamUpsertPermissionRoleService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<IamUpsertPermissionRoleCommandHandler>(IamUpsertPermissionRoleCommandHandler);
        service = module.get<IamUpsertPermissionRoleService>(IamUpsertPermissionRoleService);
    });

    describe('main', () =>
    {
        test('UpsertPermissionRoleCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should upsert the values objects and pass them as parameters to the IamUpsertPermissionRoleService', async () =>
        {
            expect(await commandHandler.execute(
                new IamUpsertPermissionRoleCommand(
                    {
                        permissionId: iamMockPermissionRoleData[0].permissionId,
                        roleId: iamMockPermissionRoleData[0].roleId,
                    },
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
