/* eslint-disable key-spacing */
import { SupportCreateConfigCommand } from '@app/support/config';
import { SupportCreateConfigService } from '@app/support/config/application/create/support-create-config.service';
import {
    SupportConfigApiKey,
    SupportConfigId,
    SupportConfigListId,
} from '@app/support/config/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SupportCreateConfigCommand)
export class SupportCreateConfigCommandHandler
    implements ICommandHandler<SupportCreateConfigCommand>
{
    constructor(
        private readonly createConfigService: SupportCreateConfigService,
    ) {}

    async execute(command: SupportCreateConfigCommand): Promise<void> {
        // call to use case and implements ValueObjects
        await this.createConfigService.main(
            {
                id: new SupportConfigId(command.payload.id),
                apiKey: new SupportConfigApiKey(command.payload.apiKey),
                listId: new SupportConfigListId(command.payload.listId),
            },
            command.cQMetadata,
        );
    }
}
