import { Pagination } from '@api/graphql';
import { IamAccountResponse } from '@app/iam/account';
import { NotificationCreateInboxesCommand, NotificationMaxInboxQuery, NotificationPaginateInboxesQuery } from '@app/notification/inbox';
import { NotificationCreateInboxSettingCommand, NotificationFindInboxSettingQuery, NotificationUpdateInboxSettingByIdCommand } from '@app/notification/inbox-setting';
import { NotificationGetOutboxesQuery } from '@app/notification/outbox';
import { AuditingMeta, ICommandBus, IQueryBus, Operator, QueryStatement, uuid } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationCheckNotificationsInboxHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        query?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<Pagination>
    {
        const inboxSetting = await this.queryBus.ask(new NotificationFindInboxSettingQuery(
            {
                where: {
                    accountId: account.id,
                },
            },
            {},
            {
                timezone,
            },
        ));

        if (inboxSetting)
        {
            // get new notifications
            const outboxNotifications = await this.queryBus.ask(new NotificationGetOutboxesQuery(
                {
                    where: {
                        // avoid query notifications that are already in the inbox
                        sort: {
                            [Operator.gt]: inboxSetting.sort,
                        },
                        [Operator.or]: [
                            {
                                // query notifications for account
                                accountRecipientIds: {
                                    [Operator.contains]: account.id,
                                },
                            },
                            {
                                [Operator.and]: [
                                    {
                                        [Operator.or]: [
                                            {
                                                // query notifications for all tenants, tenantRecipientIds = null
                                                tenantRecipientIds: {
                                                    [Operator.is]: null,
                                                },
                                            },
                                            {
                                                // query notifications for tenants that account belongs to
                                                tenantRecipientIds: {
                                                    [Operator.overlap]: account.dTenants,
                                                },
                                            },
                                        ],
                                    },
                                    {
                                        [Operator.or]: [
                                            {
                                                // query notifications for all scopes, scopeRecipients = null
                                                scopeRecipients: {
                                                    [Operator.is]: null,
                                                },
                                            },
                                            {
                                                // query notifications for scopes that account belongs to
                                                scopeRecipients: {
                                                    [Operator.overlap]: account.scopes,
                                                },
                                            },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    include: [
                        {
                            association: 'notification',
                        },

                    ],
                    order: [['sort', 'ASC']],
                },
            ));

            // create new notifications in inbox
            if (outboxNotifications.length > 0)
            {
                // create notifications in inbox
                await this.commandBus.dispatch(new NotificationCreateInboxesCommand(
                    outboxNotifications.map(outboxNotification => ({
                        id               : uuid(),
                        tenantIds        : account.dTenants,
                        notificationId   : outboxNotification.notificationId,
                        sort             : outboxNotification.sort,
                        accountId        : account.id,
                        accountCode      : account.user,
                        isImportant      : outboxNotification.notification.isImportant,
                        subject          : outboxNotification.notification.subject,
                        body             : outboxNotification.notification.body,
                        attachments      : outboxNotification.notification.attachments,
                        isRead           : false,
                        isReadAtLeastOnce: false,
                    })),
                    {
                        timezone,
                        repositoryOptions: {
                            auditing,
                        },
                    },
                ));

                // get max sort
                const maxSort = await this.queryBus.ask(new NotificationMaxInboxQuery('sort'));

                // update inbox setting
                await this.commandBus.dispatch(new NotificationUpdateInboxSettingByIdCommand(
                    {
                        id  : inboxSetting.id,
                        sort: maxSort,
                    },
                    {},
                    {
                        timezone,
                        repositoryOptions: {
                            auditing,
                        },
                    },
                ));
            }

            // get notifications according to the query
            return await this.queryBus.ask(new NotificationPaginateInboxesQuery(
                query,
                {},
                {
                    timezone,
                },
            ));
        }

        // **********************************************************
        // * if no existing inbox setting, create new inbox setting *
        // **********************************************************

        // get max sort
        const maxSort = await this.queryBus.ask(new NotificationMaxInboxQuery('sort'));

        // create inbox setting
        await this.commandBus.dispatch(new NotificationCreateInboxSettingCommand(
            {
                id       : uuid(),
                accountId: account.id,
                sort     : maxSort || 0,
            },
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return {
            total: 0,
            count: 0,
            rows : [],
        };
    }
}