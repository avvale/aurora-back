import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CommonDeleteCountryByIdCommand } from './common-delete-country-by-id.command';
import { CommonDeleteCountryByIdService } from './common-delete-country-by-id.service';
import {
    CountryId
} from '../../domain/value-objects';

@CommandHandler(CommonDeleteCountryByIdCommand)
export class CommonDeleteCountryByIdCommandHandler implements ICommandHandler<CommonDeleteCountryByIdCommand>
{
    constructor(
        private readonly deleteCountryByIdService: CommonDeleteCountryByIdService,
    ) {}

    async execute(command: CommonDeleteCountryByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteCountryByIdService.main(
            new CountryId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}