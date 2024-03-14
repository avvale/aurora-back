import { WhatsappUpdateWebhookByIdInput, WhatsappWebhook } from '@api/graphql';
import { WhatsappUpdateWebhookByIdDto, WhatsappWebhookDto } from '@api/whatsapp/webhook';
import { WhatsappFindWebhookByIdQuery, WhatsappUpdateWebhookByIdCommand } from '@app/whatsapp/webhook';
import { diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class WhatsappUpdateWebhookByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: WhatsappUpdateWebhookByIdInput | WhatsappUpdateWebhookByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<WhatsappWebhook | WhatsappWebhookDto>
    {
        const webhook = await this.queryBus.ask(new WhatsappFindWebhookByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, webhook);

        await this.commandBus.dispatch(new WhatsappUpdateWebhookByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new WhatsappFindWebhookByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
