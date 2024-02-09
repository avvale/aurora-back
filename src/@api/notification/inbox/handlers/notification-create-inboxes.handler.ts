import { NotificationCreateInboxInput } from '@api/graphql';
import { NotificationCreateInboxDto } from '@api/notification/inbox';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationCreateInboxesCommand } from '@app/notification/inbox';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateInboxesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: NotificationCreateInboxInput[] | NotificationCreateInboxDto[],
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new NotificationCreateInboxesCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return true;
    }
}
