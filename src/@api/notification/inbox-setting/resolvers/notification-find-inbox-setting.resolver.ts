import { NotificationInboxSetting } from '@api/graphql';
import { NotificationFindInboxSettingHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.get')
export class NotificationFindInboxSettingResolver
{
    constructor(
        private readonly handler: NotificationFindInboxSettingHandler,
    ) {}

    @Query('notificationFindInboxSetting')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationInboxSetting>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
