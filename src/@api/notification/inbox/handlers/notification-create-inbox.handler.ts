import { NotificationCreateInboxInput, NotificationInbox } from '@api/graphql';
import { NotificationCreateInboxDto, NotificationInboxDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationCreateInboxCommand, NotificationFindInboxByIdQuery } from '@app/notification/inbox';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateInboxHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationCreateInboxInput | NotificationCreateInboxDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationInbox | NotificationInboxDto>
    {
        await this.commandBus.dispatch(new NotificationCreateInboxCommand(
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
