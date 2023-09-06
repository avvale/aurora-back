import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import {
    IamPermissionRolePermissionId,
    IamPermissionRoleRoleId,
} from '../../domain/value-objects';
import { IamIPermissionRoleRepository } from '../../domain/iam-permission-role.repository';
import { IamPermissionRole } from '../../domain/iam-permission-role.aggregate';
import { IamAddPermissionsRolesContextEvent } from '../events/iam-add-permissions-roles-context.event';

@Injectable()
export class IamUpdatePermissionsRolesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IamIPermissionRoleRepository,
    ) {}

    async main(
        payload: {
            permissionId?: IamPermissionRolePermissionId;
            roleId?: IamPermissionRoleRoleId;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const permissionRole = IamPermissionRole.register(
            payload.permissionId,
            payload.roleId,
        );

        // update
        await this.repository.update(
            permissionRole,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const permissionsRoles = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const permissionsRolesRegister = this.publisher.mergeObjectContext(
            new IamAddPermissionsRolesContextEvent(permissionsRoles),
        );

        permissionsRolesRegister.updated(); // apply event to model events
        permissionsRolesRegister.commit(); // commit all events of model
    }
}
