import { NotificationOutBoxNotification, NotificationUpdateOutBoxNotificationByIdInput } from '@api/graphql';
import { NotificationOutBoxNotificationDto, NotificationUpdateOutBoxNotificationByIdDto } from '@api/notification/out-box-notification';
import { NotificationFindOutBoxNotificationByIdQuery, NotificationUpsertOutBoxNotificationCommand } from '@app/notification/out-box-notification';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpsertOutBoxNotificationHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateOutBoxNotificationByIdInput | NotificationUpdateOutBoxNotificationByIdDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification | NotificationOutBoxNotificationDto>
    {
        await this.commandBus.dispatch(new NotificationUpsertOutBoxNotificationCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new NotificationFindOutBoxNotificationByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
