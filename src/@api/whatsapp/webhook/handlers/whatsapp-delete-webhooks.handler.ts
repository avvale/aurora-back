import { WhatsappWebhook } from '@api/graphql';
import { WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappDeleteWebhooksCommand, WhatsappGetWebhooksQuery } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappDeleteWebhooksHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<WhatsappWebhook[] | WhatsappWebhookDto[]>
    {
        const webhooks = await this.queryBus.ask(new WhatsappGetWebhooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new WhatsappDeleteWebhooksCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return webhooks;
    }
}
