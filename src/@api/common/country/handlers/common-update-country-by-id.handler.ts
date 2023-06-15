import { CommonCountryDto, CommonUpdateCountryByIdDto } from '../dto';
import { CommonCountry, CommonUpdateCountryByIdInput } from '@api/graphql';
import { FindCountryByIdQuery } from '@app/common/country/application/find/find-country-by-id.query';
import { UpdateCountryByIdCommand } from '@app/common/country/application/update/update-country-by-id.command';
import { AuditingMeta, CoreAddI18nConstraintService, CoreGetContentLanguageObjectService, CoreGetSearchKeyLangService, ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpdateCountryByIdHandler
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
        constraint?: QueryStatement,
        timezone?: string,
        contentLanguage?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonCountry | CommonCountryDto>
    {
        if (!contentLanguage) throw new BadRequestException('To update a multi-language object, the content-language header must be defined.');

        const constraintToFindById = await this.coreAddI18nConstraintService.add(
            {},
            'countryI18n',
            contentLanguage,
            {
                searchKeyLang: this.coreGetSearchKeyLangService.get(),
            },
        );

        const country = await this.queryBus.ask(new FindCountryByIdQuery(
            payload.id,
            constraintToFindById,
            {
                timezone,
            },
        ));

        const dataToUpdate = Utils.diff(payload, country);

        const contentLanguageObject = await this.coreGetContentLanguageObjectService.get(contentLanguage);

        await this.commandBus.dispatch(new UpdateCountryByIdCommand(
            {
                ...dataToUpdate,
                id    : payload.id,
                langId: contentLanguageObject.id,
            },
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
                meta: {
                    contentLanguage: contentLanguageObject,
                },
            },
        ));

        return await this.queryBus.ask(new FindCountryByIdQuery(
            payload.id,
            constraintToFindById,
            {
                timezone,
            },
        ));
    }
}