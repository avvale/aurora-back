import { SupportDeleteConfigByIdCommand } from '@app/support/config';
import { SupportDeleteConfigByIdService } from '@app/support/config/application/delete/support-delete-config-by-id.service';
import { SupportConfigId } from '@app/support/config/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SupportDeleteConfigByIdCommand)
export class SupportDeleteConfigByIdCommandHandler
    implements ICommandHandler<SupportDeleteConfigByIdCommand>
{
    constructor(
        private readonly deleteConfigByIdService: SupportDeleteConfigByIdService,
    ) {}

    async execute(command: SupportDeleteConfigByIdCommand): Promise<void> {
        // call to use case and implements ValueObjects
        await this.deleteConfigByIdService.main(
            new SupportConfigId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
