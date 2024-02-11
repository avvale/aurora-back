/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { AuthenticationJwtGuard } from '@api/o-auth/shared';
import { MessageInboxDto } from '../dto';
import { MessagePaginateMessagesInboxHandler } from '../handlers/message-paginate-messages-inbox.handler';
import { IamAccountResponse } from '@app/iam/account';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('[message] inbox')
@Controller('message/inbox/paginate-messages')
@UseGuards(AuthenticationJwtGuard)
export class MessagePaginateMessagesInboxController
{
    constructor(
        private readonly handler: MessagePaginateMessagesInboxHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Defines the operation of this controller' })
    @ApiCreatedResponse({ description: 'Defines the action performed', type: [MessageInboxDto]})
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            account,
            queryStatement,
            constraint,
            timezone,
        );
    }
}