import { NotificationCreateInboxSettingInput } from '@api/graphql';
import { NotificationCreateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.create')
export class NotificationCreateInboxSettingsResolver
{
    constructor(
        private readonly handler: NotificationCreateInboxSettingsHandler,
    ) {}

    @Mutation('notificationCreateInboxSettings')
    async main(
        @Args('payload') payload: NotificationCreateInboxSettingInput[],
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
