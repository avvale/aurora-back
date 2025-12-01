import { ToolsDigestWebhookCommand } from '@app/tools/webhook';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ToolsDigestWebhookHandler {
    constructor(private readonly commandBus: ICommandBus) {}

    async main(payload: any): Promise<boolean> {
        await this.commandBus.dispatch(new ToolsDigestWebhookCommand(payload));

        return true;
    }
}
