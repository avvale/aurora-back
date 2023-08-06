import { IamPermissionResponse } from '@app/iam/permission/domain/iam-permission.response';
import { RoleResponse } from '@app/iam/role/domain/role.response';

export class PermissionRoleResponse
{
    constructor(
        public readonly permissionId: string,
        public readonly roleId: string,
        public readonly permission: IamPermissionResponse,
        public readonly role: RoleResponse,
    ) {}
}