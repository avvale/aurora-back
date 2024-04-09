import { IamAccountResponse } from '@app/iam/account';
import { MessageFindInboxByIdQuery, MessageUpdateInboxByIdCommand } from '@app/message/inbox';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { MessageInboxDto } from '../dto';
import { MessageInbox } from '@api/graphql';
import { MessageUpdateAndIncrementMessagesCommand } from '@app/message/message';

@Injectable()
export class MessageReadCustomerMessageInboxHandler
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
                isRead           : true,
                isReadAtLeastOnce: true,
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

        if (!inbox.isReadAtLeastOnce)
        {
            await this.queryBus.ask(new MessageUpdateAndIncrementMessagesCommand(
                {
                    reads: 1,
                },
                {
                    ...constraint,
                    where: {
                        ...constraint.where,
                        id       : inbox.messageId,
                        accountId: account.id,
                    },
                },
            ));
        }

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