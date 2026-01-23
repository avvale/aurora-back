import { AuthorizationPermissionsGuard } from '@api/iam/shared/guards/authorization-permissions.guard';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { Permissions } from '@aurorajs.dev/core';
import { applyDecorators, UseGuards } from '@nestjs/common';

export function Auth(
  ...permissions: string[]
): MethodDecorator & ClassDecorator {
  return applyDecorators(
    Permissions(...permissions),
    UseGuards(AuthenticationJwtGuard, AuthorizationPermissionsGuard),
  );
}
