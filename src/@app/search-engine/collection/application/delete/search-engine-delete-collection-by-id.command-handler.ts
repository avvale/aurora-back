import { SearchEngineDeleteCollectionByIdCommand } from '@app/search-engine/collection';
import { SearchEngineDeleteCollectionByIdService } from '@app/search-engine/collection/application/delete/search-engine-delete-collection-by-id.service';
import { SearchEngineCollectionId } from '@app/search-engine/collection/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SearchEngineDeleteCollectionByIdCommand)
export class SearchEngineDeleteCollectionByIdCommandHandler implements ICommandHandler<SearchEngineDeleteCollectionByIdCommand>
{
    constructor(
        private readonly deleteCollectionByIdService: SearchEngineDeleteCollectionByIdService,
    ) {}

    async execute(command: SearchEngineDeleteCollectionByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteCollectionByIdService.main(
            new SearchEngineCollectionId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}
