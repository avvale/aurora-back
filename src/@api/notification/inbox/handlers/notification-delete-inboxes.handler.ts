import { NotificationInbox } from '@api/graphql';
import { NotificationInboxDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationDeleteInboxesCommand, NotificationGetInboxesQuery } from '@app/notification/inbox';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationDeleteInboxesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInbox[] | NotificationInboxDto[]>
    {
        const inboxes = await this.queryBus.ask(new NotificationGetInboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new NotificationDeleteInboxesCommand(
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return inboxes;
    }
}
