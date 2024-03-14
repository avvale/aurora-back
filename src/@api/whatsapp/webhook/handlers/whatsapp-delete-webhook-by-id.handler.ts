import { WhatsappWebhook } from '@api/graphql';
import { WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappDeleteWebhookByIdCommand, WhatsappFindWebhookByIdQuery } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappDeleteWebhookByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<WhatsappWebhook | WhatsappWebhookDto>
    {
        const webhook = await this.queryBus.ask(new WhatsappFindWebhookByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new WhatsappDeleteWebhookByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return webhook;
    }
}
