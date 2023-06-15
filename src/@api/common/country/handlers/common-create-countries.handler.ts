import { CommonCreateCountryDto } from '../dto';
import { CommonCreateCountryInput } from '@api/graphql';
import { CreateCountriesCommand } from '@app/common/country/application/create/create-countries.command';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonCreateCountriesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: CommonCreateCountryInput[] | CommonCreateCountryDto[],
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        // no content-language header is required.
        await this.commandBus.dispatch(new CreateCountriesCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return true;
    }
}