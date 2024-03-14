import { WhatsappWebhook } from '@api/graphql';
import { WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappGetWebhooksQuery } from '@app/whatsapp/webhook';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappGetWebhooksHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<WhatsappWebhook[] | WhatsappWebhookDto[]>
    {
        return await this.queryBus.ask(new WhatsappGetWebhooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
