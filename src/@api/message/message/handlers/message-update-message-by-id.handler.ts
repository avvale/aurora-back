import { MessageMessage, MessageUpdateMessageByIdInput } from '@api/graphql';
import { MessageMessageDto, MessageUpdateMessageByIdDto } from '@api/message/message';
import { IamAccountResponse } from '@app/iam/account';
import { MessageFindMessageByIdQuery, MessageUpdateMessageByIdCommand } from '@app/message/message';
import { AuditingMeta, diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageUpdateMessageByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: MessageUpdateMessageByIdInput | MessageUpdateMessageByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<MessageMessage | MessageMessageDto>
    {
        const message = await this.queryBus.ask(new MessageFindMessageByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, message);

        await this.commandBus.dispatch(new MessageUpdateMessageByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new MessageFindMessageByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
