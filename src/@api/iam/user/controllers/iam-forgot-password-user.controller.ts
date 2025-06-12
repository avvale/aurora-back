/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { IamUpdateUserByIdDto } from '../dto';
import { IamForgotPasswordUserHandler } from '../handlers/iam-forgot-password-user.handler';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[iam] user')
@Controller('iam/user/forgot-password')
@Auth('iam.user.update')
export class IamForgotPasswordUserController
{
    constructor(
        private readonly handler: IamForgotPasswordUserHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: Boolean })
    async main(
        @Body() payload: IamUpdateUserByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}