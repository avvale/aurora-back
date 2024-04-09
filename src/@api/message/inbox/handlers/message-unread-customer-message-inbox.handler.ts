import { MessageInboxDto } from '../dto';
import { MessageInbox } from '@api/graphql';
import { IamAccountResponse } from '@app/iam/account';
import { MessageFindInboxByIdQuery, MessageUpdateInboxByIdCommand } from '@app/message/inbox';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageUnreadCustomerMessageInboxHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<MessageInbox | MessageInboxDto>
    {
        const inbox = await this.queryBus.ask(new MessageFindInboxByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new MessageUpdateInboxByIdCommand(
            {
                id,
                isRead: false,
            },
            {
                ...constraint,
                where: {
                    ...constraint.where,
                    accountId: account.id,
                },
            },
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new MessageFindInboxByIdQuery(
            id,
            {
                ...constraint,
                where: {
                    ...constraint.where,
                    accountId: account.id,
                },
            },
            {
                timezone,
            },
        ));
    }
}