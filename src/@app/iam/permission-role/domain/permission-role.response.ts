import { IamPermissionResponse } from '@app/iam/permission/domain/iam-permission.response';
import { IamRoleResponse } from '@app/iam/role/domain/iam-role.response';

export class PermissionRoleResponse
{
    constructor(
        public readonly permissionId: string,
        public readonly roleId: string,
        public readonly permission: IamPermissionResponse,
        public readonly role: IamRoleResponse,
    ) {}
}