/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { MessageUpdateMessageByIdDto } from '../dto';
import { MessageCountTotalRecipientsMessageHandler } from '../handlers/message-count-total-recipients-message.handler';
import { TenantPolicy } from '@api/iam/shared';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[message] message')
@Controller('message/message/count-total-recipients')
@Auth('message.message.update')
export class MessageCountTotalRecipientsMessageController
{
    constructor(
        private readonly handler: MessageCountTotalRecipientsMessageHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: Boolean })
    @TenantPolicy()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body('tenantRecipientIds') tenantRecipientIds: string[],
        @Body('scopeRecipients') scopeRecipients: string[],
        @Body('tagRecipients') tagRecipients: string[],
        @Body('accountRecipientIds') accountRecipientIds: string[],
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    )
    {
        return await this.handler.main(
            account,
            tenantRecipientIds,
            scopeRecipients,
            tagRecipients,
            accountRecipientIds,
            constraint,
            timezone,
            auditing,
        );
    }
}