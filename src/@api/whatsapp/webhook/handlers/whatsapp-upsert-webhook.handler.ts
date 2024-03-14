import { WhatsappUpdateWebhookByIdInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappUpdateWebhookByIdDto, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappFindWebhookByIdQuery, WhatsappUpsertWebhookCommand } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappUpsertWebhookHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: WhatsappUpdateWebhookByIdInput | WhatsappUpdateWebhookByIdDto,
        timezone?: string,
    ): Promise<WhatsappWebhook | WhatsappWebhookDto>
    {
        await this.commandBus.dispatch(new WhatsappUpsertWebhookCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new WhatsappFindWebhookByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
