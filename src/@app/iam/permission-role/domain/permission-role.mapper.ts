import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';
import { IamPermissionRole } from './permission-role.aggregate';
import { PermissionRoleResponse } from './permission-role.response';
import {
    PermissionRolePermissionId,
    PermissionRoleRoleId,
} from './value-objects';
import { IamPermissionMapper } from '@app/iam/permission/domain/iam-permission.mapper';
import { IamRoleMapper } from '@app/iam/role/domain/iam-role.mapper';

export class PermissionRoleMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param permissionRole
     */
    mapModelToAggregate(permissionRole: LiteralObject, cQMetadata?: CQMetadata): IamPermissionRole
    {
        if (!permissionRole) return;

        return this.makeAggregate(permissionRole, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param permissionsRoles
     */
    mapModelsToAggregates(permissionsRoles: LiteralObject[], cQMetadata?: CQMetadata): IamPermissionRole[]
    {
        if (!Array.isArray(permissionsRoles)) return;

        return permissionsRoles.map(permissionRole  => this.makeAggregate(permissionRole, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param permissionRole
     */
    mapAggregateToResponse(permissionRole: IamPermissionRole): PermissionRoleResponse
    {
        return this.makeResponse(permissionRole);
    }

    /**
     * Map array of aggregates to array responses
     * @param permissionsRoles
     */
    mapAggregatesToResponses(permissionsRoles: IamPermissionRole[]): PermissionRoleResponse[]
    {
        if (!Array.isArray(permissionsRoles)) return;

        return permissionsRoles.map(permissionRole => this.makeResponse(permissionRole));
    }

    private makeAggregate(permissionRole: LiteralObject, cQMetadata?: CQMetadata): IamPermissionRole
    {
        return IamPermissionRole.register(
            new PermissionRolePermissionId(permissionRole.permissionId),
            new PermissionRoleRoleId(permissionRole.roleId),
            this.options.eagerLoading ? new IamPermissionMapper({ eagerLoading: true }).mapModelToAggregate(permissionRole.permission, cQMetadata) : undefined,
            this.options.eagerLoading ? new IamRoleMapper({ eagerLoading: true }).mapModelToAggregate(permissionRole.role, cQMetadata) : undefined,
        );
    }

    private makeResponse(permissionRole: IamPermissionRole): PermissionRoleResponse
    {
        if (!permissionRole) return;

        return new PermissionRoleResponse(
            permissionRole.permissionId.value,
            permissionRole.roleId.value,
            this.options.eagerLoading ? new IamPermissionMapper({ eagerLoading: true }).mapAggregateToResponse(permissionRole.permission) : undefined,
            this.options.eagerLoading ? new IamRoleMapper({ eagerLoading: true }).mapAggregateToResponse(permissionRole.role) : undefined,
        );
    }
}