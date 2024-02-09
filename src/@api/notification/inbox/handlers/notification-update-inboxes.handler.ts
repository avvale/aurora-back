import { NotificationInbox, NotificationUpdateInboxesInput } from '@api/graphql';
import { NotificationInboxDto, NotificationUpdateInboxesDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationGetInboxesQuery, NotificationUpdateInboxesCommand } from '@app/notification/inbox';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateInboxesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationUpdateInboxesInput | NotificationUpdateInboxesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInbox | NotificationInboxDto>
    {
        await this.commandBus.dispatch(new NotificationUpdateInboxesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationGetInboxesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
