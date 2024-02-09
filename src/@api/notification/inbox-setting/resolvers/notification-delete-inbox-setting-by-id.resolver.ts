import { NotificationInboxSetting } from '@api/graphql';
import { NotificationDeleteInboxSettingByIdHandler } from '@api/notification/inbox-setting';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.inboxSetting.delete')
export class NotificationDeleteInboxSettingByIdResolver
{
    constructor(
        private readonly handler: NotificationDeleteInboxSettingByIdHandler,
    ) {}

    @Mutation('notificationDeleteInboxSettingById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<NotificationInboxSetting>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
            auditing,
        );
    }
}
