import { CommonCountryDto, CommonUpdateCountriesDto } from '../dto';
import { CommonCountry, CommonUpdateCountriesInput } from '@api/graphql';
import { GetCountriesQuery } from '@app/common/country/application/get/get-countries.query';
import { UpdateCountriesCommand } from '@app/common/country/application/update/update-countries.command';
import { AuditingMeta, CoreAddI18nConstraintService, CoreGetContentLanguageObjectService, CoreGetSearchKeyLangService, ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpdateCountriesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly coreAddI18nConstraintService: CoreAddI18nConstraintService,
        private readonly coreGetContentLanguageObjectService: CoreGetContentLanguageObjectService,
        private readonly coreGetSearchKeyLangService: CoreGetSearchKeyLangService,
    ) {}

    async main(
        payload: CommonUpdateCountriesInput | CommonUpdateCountriesDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        contentLanguage?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonCountry | CommonCountryDto>
    {
        if (!contentLanguage) throw new BadRequestException('To update a multi-language objects, the content-language header must be defined.');

        await this.commandBus.dispatch(new UpdateCountriesCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
                meta: {
                    contentLanguage: await this.coreGetContentLanguageObjectService.get(contentLanguage),
                },
            },
        ));

        constraint = await this.coreAddI18nConstraintService.add(
            {},
            'countryI18n',
            contentLanguage,
            {
                searchKeyLang: this.coreGetSearchKeyLangService.get(),
            },
        );

        return await this.queryBus.ask(new GetCountriesQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}