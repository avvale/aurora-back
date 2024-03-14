import { WhatsappUpdateWebhooksInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappUpdateWebhooksDto, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappGetWebhooksQuery, WhatsappUpdateWebhooksCommand } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappUpdateWebhooksHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: WhatsappUpdateWebhooksInput | WhatsappUpdateWebhooksDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<WhatsappWebhook | WhatsappWebhookDto>
    {
        await this.commandBus.dispatch(new WhatsappUpdateWebhooksCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new WhatsappGetWebhooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}
