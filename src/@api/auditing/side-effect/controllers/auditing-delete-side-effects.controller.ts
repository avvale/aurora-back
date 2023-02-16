/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Delete, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurora-ts/core';
import { AuditingSideEffectDto } from '../dto';

// authorization
import { Permissions } from '@api/iam/shared/decorators/permissions.decorator';
import { AuthenticationJwtGuard } from '@api/o-auth/shared/guards/authentication-jwt.guard';
import { AuthorizationGuard } from '@api/iam/shared/guards/authorization.guard';

// @app
import { AuditingDeleteSideEffectsHandler } from '../handlers/auditing-delete-side-effects.handler';

@ApiTags('[auditing] side-effect')
@Controller('auditing/side-effects/delete')
@Permissions('auditing.sideEffect.delete')
@UseGuards(AuthenticationJwtGuard, AuthorizationGuard)
export class AuditingDeleteSideEffectsController
{
    constructor(
        private readonly handler: AuditingDeleteSideEffectsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete side-effects in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [AuditingSideEffectDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}