import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { IamSeeder } from './iam.seeder';
import { IamModels, IamHandlers, IamServices, IamRepositories, IamSagas } from '@app/iam';
import { IamBoundedContextApiHandlers, IamBoundedContextApiControllers, IamBoundedContextApiResolvers, IamBoundedContextApiServices } from './bounded-context';
import { IamPermissionApiHandlers, IamPermissionApiControllers, IamPermissionApiResolvers, IamPermissionApiServices } from './permission';
import { IamPermissionRoleApiHandlers, IamPermissionRoleApiControllers, IamPermissionRoleApiResolvers, IamPermissionRoleApiServices } from './permission-role';
import { IamTenantControllers, IamTenantResolvers, IamTenantApiHandlers, IamTenantServices } from './tenant';
import { IamRoleControllers, IamRoleResolvers, IamRoleApiHandlers, IamRoleServices } from './role';
import { IamAccountControllers, IamAccountResolvers, IamAccountApiHandlers, IamAccountServices } from './account';
import { IamUserControllers, IamUserResolvers, IamUserApiHandlers, IamUserServices } from './user';
import { IamUserMetaControllers, IamUserMetaResolvers, IamUserMetaApiHandlers } from './user-meta';
import { IamCreatePermissionsFromRolesService } from '@app/iam/permission-role/application/services/iam-create-permissions-from-roles.service';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
            ...IamModels,
        ]),
    ],
    controllers: [
        ...IamAccountControllers,
        ...IamRoleControllers,
        ...IamTenantControllers,
        ...IamUserControllers,
        ...IamUserMetaControllers,
        ...IamBoundedContextApiControllers,
        ...IamPermissionApiControllers,
        ...IamPermissionRoleApiControllers
    ],
    providers: [
        IamSeeder,
        ...IamAccountApiHandlers,
        ...IamAccountResolvers,
        ...IamBoundedContextApiHandlers,
        ...IamHandlers,
        ...IamPermissionApiHandlers,
        ...IamPermissionRoleApiHandlers,
        ...IamRepositories,
        ...IamRoleApiHandlers,
        ...IamRoleResolvers,
        ...IamSagas,
        ...IamServices,
        ...IamTenantApiHandlers,
        ...IamTenantResolvers,
        ...IamUserApiHandlers,
        ...IamUserMetaApiHandlers,
        ...IamUserMetaResolvers,
        ...IamUserResolvers,
        ...IamAccountServices,

        // ---- customizations ----
        IamCreatePermissionsFromRolesService,
        ...IamRoleServices,
        ...IamTenantServices,
        ...IamUserServices,
        ...IamBoundedContextApiResolvers,
        ...IamBoundedContextApiServices,
        ...IamPermissionApiResolvers,
        ...IamPermissionApiServices,
        ...IamPermissionRoleApiResolvers,
        ...IamPermissionRoleApiServices
    ],
})
export class IamModule {}
