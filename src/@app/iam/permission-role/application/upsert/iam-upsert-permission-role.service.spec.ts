/* eslint-disable @typescript-eslint/no-unused-vars */
import { Test, TestingModule } from '@nestjs/testing';
import { EventPublisher, EventBus, CommandBus, UnhandledExceptionBus } from '@nestjs/cqrs';

// custom items
import { iamMockPermissionRoleData } from '@app/iam/permission-role/infrastructure/mock/iam-mock-permission-role.data';
import { IamUpsertPermissionRoleService } from './iam-upsert-permission-role.service';
import {
    IamPermissionRolePermissionId,
    IamPermissionRoleRoleId,
} from '../../domain/value-objects';
import { IamIPermissionRoleRepository } from '../../domain/iam-permission-role.repository';
import { IamMockPermissionRoleRepository } from '../../infrastructure/mock/iam-mock-permission-role.repository';

describe('IamUpsertPermissionRoleService', () =>

{
    let service: IamUpsertPermissionRoleService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                IamUpsertPermissionRoleService,
                IamMockPermissionRoleRepository,
                {
                    provide : IamIPermissionRoleRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(IamUpsertPermissionRoleService);
    });

    describe('main', () =>
    {
        test('IamUpsertPermissionRoleService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a permissionRole and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        permissionId: new IamPermissionRolePermissionId(iamMockPermissionRoleData[0].permissionId),
                        roleId: new IamPermissionRoleRoleId(iamMockPermissionRoleData[0].roleId),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
