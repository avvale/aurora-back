import { SearchEngineDeleteFieldByIdCommand } from '@app/search-engine/field';
import { SearchEngineDeleteFieldByIdService } from '@app/search-engine/field/application/delete/search-engine-delete-field-by-id.service';
import { SearchEngineFieldId } from '@app/search-engine/field/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineDeleteFieldByIdCommand)
export class SearchEngineDeleteFieldByIdCommandHandler implements ICommandHandler<SearchEngineDeleteFieldByIdCommand>
{
    constructor(
        private readonly deleteFieldByIdService: SearchEngineDeleteFieldByIdService,
    ) {}

    async execute(command: SearchEngineDeleteFieldByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteFieldByIdService.main(
            new SearchEngineFieldId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
