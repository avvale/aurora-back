import { NotificationOutbox } from '@api/graphql';
import { NotificationFindOutboxByIdHandler } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Query, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('notification.outbox.get')
export class NotificationFindOutboxByIdResolver
{
    constructor(
        private readonly handler: NotificationFindOutboxByIdHandler,
    ) {}

    @Query('notificationFindOutboxById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<NotificationOutbox>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}
