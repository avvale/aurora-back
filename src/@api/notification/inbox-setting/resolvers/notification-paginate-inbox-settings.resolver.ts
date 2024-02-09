import { Pagination } from '@api/graphql';
import { NotificationPaginateInboxSettingsHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.get')
export class NotificationPaginateInboxSettingsResolver
{
    constructor(
        private readonly handler: NotificationPaginateInboxSettingsHandler,
    ) {}

    @Query('notificationPaginateInboxSettings')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
