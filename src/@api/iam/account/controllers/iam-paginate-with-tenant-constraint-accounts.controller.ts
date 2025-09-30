/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IamPaginateAccountsHandler } from '@api/iam/account';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { IamAccountDto } from '../dto';

@ApiTags('[iam] account')
@Controller('iam/accounts/paginate-with-tenant-constraint')
@Auth('iam.account.get')
export class IamPaginateWithTenantConstraintAccountsController
{
    constructor(
        private readonly handler: IamPaginateAccountsHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: [IamAccountDto]})
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