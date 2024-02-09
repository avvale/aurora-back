import { NotificationInbox, NotificationUpdateInboxByIdInput } from '@api/graphql';
import { NotificationInboxDto, NotificationUpdateInboxByIdDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationFindInboxByIdQuery, NotificationUpdateInboxByIdCommand } from '@app/notification/inbox';
import { AuditingMeta, diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateInboxByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationUpdateInboxByIdInput | NotificationUpdateInboxByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInbox | NotificationInboxDto>
    {
        const inbox = await this.queryBus.ask(new NotificationFindInboxByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, inbox);

        await this.commandBus.dispatch(new NotificationUpdateInboxByIdCommand(
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

        return await this.queryBus.ask(new NotificationFindInboxByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
