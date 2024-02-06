import { NotificationCreateOutBoxNotificationInput, NotificationOutBoxNotification } from '@api/graphql';
import { NotificationCreateOutBoxNotificationDto, NotificationOutBoxNotificationDto } from '@api/notification/out-box-notification';
import { NotificationCreateOutBoxNotificationCommand, NotificationFindOutBoxNotificationByIdQuery } from '@app/notification/out-box-notification';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCreateOutBoxNotificationHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationCreateOutBoxNotificationInput | NotificationCreateOutBoxNotificationDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification | NotificationOutBoxNotificationDto>
    {
        await this.commandBus.dispatch(new NotificationCreateOutBoxNotificationCommand(
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
