/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IamUpsertPermissionRoleCommand } from './iam-upsert-permission-role.command';
import { IamUpsertPermissionRoleService } from './iam-upsert-permission-role.service';
import {
    IamPermissionRolePermissionId,
    IamPermissionRoleRoleId,
} from '../../domain/value-objects';

@CommandHandler(IamUpsertPermissionRoleCommand)
export class IamUpsertPermissionRoleCommandHandler implements ICommandHandler<IamUpsertPermissionRoleCommand>
{
    constructor(
        private readonly upsertPermissionRoleService: IamUpsertPermissionRoleService,
    ) {}

    async execute(command: IamUpsertPermissionRoleCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertPermissionRoleService.main(
            {
                permissionId: new IamPermissionRolePermissionId(command.payload.permissionId),
                roleId: new IamPermissionRoleRoleId(command.payload.roleId),
            },
            command.cQMetadata,
        );
    }
}
