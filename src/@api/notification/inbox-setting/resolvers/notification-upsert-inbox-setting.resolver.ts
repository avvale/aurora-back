import { NotificationInboxSetting, NotificationUpdateInboxSettingByIdInput } from '@api/graphql';
import { NotificationUpsertInboxSettingHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.upsert')
export class NotificationUpsertInboxSettingResolver
{
    constructor(
        private readonly handler: NotificationUpsertInboxSettingHandler,
    ) {}

    @Mutation('notificationUpsertInboxSetting')
    async main(
        @Args('payload') payload: NotificationUpdateInboxSettingByIdInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
