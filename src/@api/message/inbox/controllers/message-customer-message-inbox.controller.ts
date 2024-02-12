/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MessageInboxDto } from '../dto';
import { MessageCustomerMessageInboxHandler } from '../handlers/message-customer-message-inbox.handler';
import { TenantPolicy } from '@api/iam/shared';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[message] inbox')
@Controller('message/inbox/customer-message')
@Auth('message.inbox.get')
export class MessageCustomerMessageInboxController
{
    constructor(
        private readonly handler: MessageCustomerMessageInboxHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: [MessageInboxDto]})
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}