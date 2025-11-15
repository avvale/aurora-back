/* eslint-disable key-spacing */
import { SupportUpdateConfigByIdCommand } from '@app/support/config';
import { SupportUpdateConfigByIdService } from '@app/support/config/application/update/support-update-config-by-id.service';
import {
    SupportConfigApiKey,
    SupportConfigId,
    SupportConfigListId,
} from '@app/support/config/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SupportUpdateConfigByIdCommand)
export class SupportUpdateConfigByIdCommandHandler
    implements ICommandHandler<SupportUpdateConfigByIdCommand>
{
    constructor(
        private readonly updateConfigByIdService: SupportUpdateConfigByIdService,
    ) {}

    async execute(command: SupportUpdateConfigByIdCommand): Promise<void> {
        // call to use case and implements ValueObjects
        await this.updateConfigByIdService.main(
            {
                id: new SupportConfigId(command.payload.id),
                apiKey: new SupportConfigApiKey(command.payload.apiKey),
                listId: new SupportConfigListId(command.payload.listId),
            },
            command.constraint,
            command.cQMetadata,
        );
    }
}
