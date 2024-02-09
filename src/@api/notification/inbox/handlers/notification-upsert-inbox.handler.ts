import { NotificationInbox, NotificationUpdateInboxByIdInput } from '@api/graphql';
import { NotificationInboxDto, NotificationUpdateInboxByIdDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationFindInboxByIdQuery, NotificationUpsertInboxCommand } from '@app/notification/inbox';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpsertInboxHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationUpdateInboxByIdInput | NotificationUpdateInboxByIdDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInbox | NotificationInboxDto>
    {
        await this.commandBus.dispatch(new NotificationUpsertInboxCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindInboxByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
