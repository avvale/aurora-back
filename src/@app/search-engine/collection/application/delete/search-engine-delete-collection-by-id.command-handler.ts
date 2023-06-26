import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineDeleteCollectionByIdCommand } from './search-engine-delete-collection-by-id.command';
import { SearchEngineDeleteCollectionByIdService } from './search-engine-delete-collection-by-id.service';
import {
    SearchEngineCollectionId
} from '../../domain/value-objects';

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