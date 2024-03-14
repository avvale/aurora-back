import { WhatsappCreateWebhookInput } from '@api/graphql';
import { WhatsappCreateWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappCreateWebhooksCommand } from '@app/whatsapp/webhook';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappCreateWebhooksHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: WhatsappCreateWebhookInput[] | WhatsappCreateWebhookDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new WhatsappCreateWebhooksCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
