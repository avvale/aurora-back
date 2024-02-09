import { NotificationInboxSetting } from '@api/graphql';
import { NotificationFindInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.get')
export class NotificationFindInboxSettingByIdResolver
{
    constructor(
        private readonly handler: NotificationFindInboxSettingByIdHandler,
    ) {}

    @Query('notificationFindInboxSettingById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationInboxSetting>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
