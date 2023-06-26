import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { SearchEngineDeleteFieldByIdCommand } from './search-engine-delete-field-by-id.command';
import { SearchEngineDeleteFieldByIdService } from './search-engine-delete-field-by-id.service';
import {
    SearchEngineFieldId
} from '../../domain/value-objects';

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