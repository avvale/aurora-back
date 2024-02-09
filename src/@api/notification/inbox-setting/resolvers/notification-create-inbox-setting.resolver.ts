import { NotificationCreateInboxSettingInput, NotificationInboxSetting } from '@api/graphql';
import { NotificationCreateInboxSettingHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.create')
export class NotificationCreateInboxSettingResolver
{
    constructor(
        private readonly handler: NotificationCreateInboxSettingHandler,
    ) {}

    @Mutation('notificationCreateInboxSetting')
    async main(
        @Args('payload') payload: NotificationCreateInboxSettingInput,
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
