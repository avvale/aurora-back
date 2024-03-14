import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { WhatsappCreateWebhooksCommand } from '@app/whatsapp/webhook';
import { whatsappMockWebhookData } from '@app/whatsapp/webhook';

@Injectable()
export class WhatsappWebhookSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new WhatsappCreateWebhooksCommand(
            whatsappMockWebhookData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
