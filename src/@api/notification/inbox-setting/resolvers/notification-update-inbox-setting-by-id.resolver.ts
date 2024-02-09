import { NotificationInboxSetting, NotificationUpdateInboxSettingByIdInput } from '@api/graphql';
import { NotificationUpdateInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.update')
export class NotificationUpdateInboxSettingByIdResolver
{
    constructor(
        private readonly handler: NotificationUpdateInboxSettingByIdHandler,
    ) {}

    @Mutation('notificationUpdateInboxSettingById')
    async main(
        @Args('payload') payload: NotificationUpdateInboxSettingByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
