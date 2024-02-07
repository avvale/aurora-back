import { NotificationNotification } from '@api/graphql';
import { TenantConstraint } from '@api/iam/shared';
import { NotificationFindNotificationByIdHandler } from '@api/notification/notification';
import { IamAccountResponse } from '@app/iam/account';
import { Auth } from '@aurora/decorators';
import { CurrentAccount, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.notification.get')
export class NotificationFindNotificationByIdResolver
{
    constructor(
        private readonly handler: NotificationFindNotificationByIdHandler,
    ) {}

    @Query('notificationFindNotificationById')
    @TenantConstraint()
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationNotification>
    {
        return await this.handler.main(
            account,
            id,
            constraint,
            timezone,
        );
    }
}
