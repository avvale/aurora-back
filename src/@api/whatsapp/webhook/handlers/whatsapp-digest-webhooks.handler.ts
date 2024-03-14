import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { verifyWebhookSignature } from '../shared';
import { WhatsappPayload } from '@api/whatsapp/whatsapp.types';

@Injectable()
export class WhatsappDigestWebhooksHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        xHubSignature256: string,
        payload: WhatsappPayload,
    ): Promise<boolean>
    {
        if (!verifyWebhookSignature(xHubSignature256, payload)) throw new UnauthorizedException('Invalid signature');

        console.log('payload', payload);

        return true;
    }
}