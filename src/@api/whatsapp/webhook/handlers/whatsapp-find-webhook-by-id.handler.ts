import { WhatsappWebhook } from '@api/graphql';
import { WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappFindWebhookByIdQuery } from '@app/whatsapp/webhook';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappFindWebhookByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<WhatsappWebhook | WhatsappWebhookDto>
    {
        return await this.queryBus.ask(new WhatsappFindWebhookByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
