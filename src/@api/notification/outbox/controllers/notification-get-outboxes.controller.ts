/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NotificationGetOutboxesHandler, NotificationOutboxDto } from '@api/notification/outbox';
import { Auth } from '@aurora/decorators';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiBody, ApiOkResponse, ApiOperation, ApiQuery, ApiTags } from '@nestjs/swagger';

@ApiTags('[notification] outbox')
@Controller('notification/outboxes/get')
@Auth('notification.outbox.get')
export class NotificationGetOutboxesController
{
    constructor(
        private readonly handler: NotificationGetOutboxesHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get outboxes according to query' })
    @ApiOkResponse({ description: 'The records has been found successfully.', type: [NotificationOutboxDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}
