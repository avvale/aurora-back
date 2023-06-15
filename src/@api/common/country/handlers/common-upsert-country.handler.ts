import { CommonCountryDto, CommonUpdateCountryByIdDto } from '../dto';
import { CommonCountry, CommonUpdateCountryByIdInput } from '@api/graphql';
import { FindCountryByIdQuery } from '@app/common/country/application/find/find-country-by-id.query';
import { UpsertCountryCommand } from '@app/common/country/application/upsert/upsert-country.command';
import { AuditingMeta, CoreAddI18nConstraintService, CoreGetContentLanguageObjectService, CoreGetSearchKeyLangService, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpsertCountryHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly coreAddI18nConstraintService: CoreAddI18nConstraintService,
        private readonly coreGetContentLanguageObjectService: CoreGetContentLanguageObjectService,
        private readonly coreGetSearchKeyLangService: CoreGetSearchKeyLangService,
    ) {}

    async main(
        payload: CommonUpdateCountryByIdInput | CommonUpdateCountryByIdDto,
        timezone?: string,
        contentLanguage?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonCountry | CommonCountryDto>
    {
        if (!contentLanguage) throw new BadRequestException('To upsert a multi-language object, the content-language header must be defined.');

        await this.commandBus.dispatch(new UpsertCountryCommand(
            payload,
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

        const constraint = await this.coreAddI18nConstraintService.add(
            {},
            'countryI18n',
            contentLanguage,
            {
                searchKeyLang: this.coreGetSearchKeyLangService.get(),
            },
        );

        return await this.queryBus.ask(new FindCountryByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}