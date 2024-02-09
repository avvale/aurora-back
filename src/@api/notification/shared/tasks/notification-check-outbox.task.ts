import { NotificationNotificationStatus } from '@api/graphql';
import { NotificationGetNotificationsQuery, NotificationUpdateNotificationsCommand } from '@app/notification/notification';
import { NotificationCreateOutboxesCommand } from '@app/notification/outbox';
import { ICommandBus, IQueryBus, Operator, uuid } from '@aurorajs.dev/core';
import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import * as dayjs from 'dayjs';

@Injectable()
export class NotificationCheckOutboxTask
{
    private readonly logger = new Logger(NotificationCheckOutboxTask.name);

    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    // @Cron(CronExpression.EVERY_5_MINUTES) // Every 5 minutes
    @Cron(CronExpression.EVERY_MINUTE) // Every minute
    async handleCron(): Promise<void>
    {
        try
        {
            const notificationsToSent = await this.queryBus.ask(new NotificationGetNotificationsQuery(
                {
                    where: {
                        status       : NotificationNotificationStatus.PENDING,
                        [Operator.or]: [
                            {
                                sendAt: {
                                    [Operator.is]: null,
                                },
                            },
                            {
                                sendAt: {
                                    [Operator.lte]: dayjs().format('YYYY-MM-DD HH:mm:ss'),
                                },
                            },
                        ],
                    },
                },
            ));

            if (notificationsToSent.length > 0)
            {
                // create notification in outbox
                await this.commandBus.dispatch(new NotificationCreateOutboxesCommand(
                    notificationsToSent.map(notification => ({
                        id                 : uuid(),
                        notificationId     : notification.id,
                        accountRecipientIds: notification.accountRecipientIds,
                        tenantRecipientIds : notification.tenantRecipientIds,
                        scopeRecipients    : notification.scopeRecipients,
                    })),
                ));

                await this.commandBus.dispatch(new NotificationUpdateNotificationsCommand(
                    {
                        status: NotificationNotificationStatus.SENT,
                    },
                    {
                        where: {
                            id: notificationsToSent.map(notification => notification.id),
                        },
                    },
                ));
            }

            this.logger.log('Check outbox notifications');
        }
        catch (error)
        {
            this.logger.error('Error to check notifications outbox');
        }
    }
}