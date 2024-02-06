import { NotificationOutBoxNotification, NotificationUpdateOutBoxNotificationByIdInput } from '@api/graphql';
import { NotificationOutBoxNotificationDto, NotificationUpdateOutBoxNotificationByIdDto } from '@api/notification/out-box-notification';
import { NotificationFindOutBoxNotificationByIdQuery, NotificationUpdateOutBoxNotificationByIdCommand } from '@app/notification/out-box-notification';
import { AuditingMeta, diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationUpdateOutBoxNotificationByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: NotificationUpdateOutBoxNotificationByIdInput | NotificationUpdateOutBoxNotificationByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<NotificationOutBoxNotification | NotificationOutBoxNotificationDto>
    {
        const outBoxNotification = await this.queryBus.ask(new NotificationFindOutBoxNotificationByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, outBoxNotification);

        await this.commandBus.dispatch(new NotificationUpdateOutBoxNotificationByIdCommand(
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

        return await this.queryBus.ask(new NotificationFindOutBoxNotificationByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
