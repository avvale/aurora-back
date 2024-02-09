import { NotificationInboxSetting, NotificationUpdateInboxSettingsInput } from '@api/graphql';
import { NotificationUpdateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.update')
export class NotificationUpdateInboxSettingsResolver
{
    constructor(
        private readonly handler: NotificationUpdateInboxSettingsHandler,
    ) {}

    @Mutation('notificationUpdateInboxSettings')
    async main(
        @Args('payload') payload: NotificationUpdateInboxSettingsInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
            auditing,
        );
    }
}
