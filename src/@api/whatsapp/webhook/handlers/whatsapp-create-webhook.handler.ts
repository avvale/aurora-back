import { WhatsappCreateWebhookInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappCreateWebhookDto, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappCreateWebhookCommand, WhatsappFindWebhookByIdQuery } from '@app/whatsapp/webhook';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappCreateWebhookHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: WhatsappCreateWebhookInput | WhatsappCreateWebhookDto,
        timezone?: string,
    ): Promise<WhatsappWebhook | WhatsappWebhookDto>
    {
        await this.commandBus.dispatch(new WhatsappCreateWebhookCommand(
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
