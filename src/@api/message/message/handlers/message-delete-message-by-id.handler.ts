import { MessageMessage } from '@api/graphql';
import { MessageMessageDto } from '@api/message/message';
import { IamAccountResponse } from '@app/iam/account';
import { MessageDeleteMessageByIdCommand, MessageFindMessageByIdQuery } from '@app/message/message';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageDeleteMessageByIdHandler
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
    ): Promise<MessageMessage | MessageMessageDto>
    {
        const message = await this.queryBus.ask(new MessageFindMessageByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new MessageDeleteMessageByIdCommand(
            id,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return message;
    }
}
