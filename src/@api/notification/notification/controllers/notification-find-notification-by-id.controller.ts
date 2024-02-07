/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { TenantConstraint } from '@api/iam/shared';
import { NotificationFindNotificationByIdHandler, NotificationNotificationDto } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] notification')
@Controller('notification/notification/find')
@Auth('notification.notification.get')
export class NotificationFindNotificationByIdController
{
    constructor(
        private readonly handler: NotificationFindNotificationByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find notification by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: NotificationNotificationDto })
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            account,
            id,
            constraint,
            timezone,
        );
    }
}
