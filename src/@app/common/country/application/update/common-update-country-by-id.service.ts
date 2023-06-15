import { CommonICountryI18nRepository } from '../../domain/common-country-i18n.repository';
import { CommonCountry } from '../../domain/common-country.aggregate';
import { CommonICountryRepository } from '../../domain/common-country.repository';
import {
    CountryAdministrativeAreas,
    CountryAvailableLangs,
    CountryCreatedAt,
    CountryCustomCode,
    CountryDeletedAt,
    CountryI18nAdministrativeAreaLevel1,
    CountryI18nAdministrativeAreaLevel2,
    CountryI18nAdministrativeAreaLevel3,
    CountryI18nLangId,
    CountryI18nName,
    CountryI18nSlug,
    CountryId,
    CountryImage,
    CountryIso3166Alpha2,
    CountryIso3166Alpha3,
    CountryIso3166Numeric,
    CountryLatitude,
    CountryLongitude,
    CountryMapType,
    CountryPrefix,
    CountrySort,
    CountryUpdatedAt,
    CountryZoom,
} from '../../domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class CommonUpdateCountryByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: CommonICountryRepository,
        private readonly repositoryI18n: CommonICountryI18nRepository,
    ) {}

    async main(
        payload: {
            id: CountryId;
            iso3166Alpha2?: CountryIso3166Alpha2;
            iso3166Alpha3?: CountryIso3166Alpha3;
            iso3166Numeric?: CountryIso3166Numeric;
            customCode?: CountryCustomCode;
            prefix?: CountryPrefix;
            image?: CountryImage;
            sort?: CountrySort;
            administrativeAreas?: CountryAdministrativeAreas;
            latitude?: CountryLatitude;
            longitude?: CountryLongitude;
            zoom?: CountryZoom;
            mapType?: CountryMapType;
            langId?: CountryI18nLangId;
            name?: CountryI18nName;
            slug?: CountryI18nSlug;
            administrativeAreaLevel1?: CountryI18nAdministrativeAreaLevel1;
            administrativeAreaLevel2?: CountryI18nAdministrativeAreaLevel2;
            administrativeAreaLevel3?: CountryI18nAdministrativeAreaLevel3;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        const contentLanguage = cQMetadata.meta.contentLanguage;

        // override langId value object with header content-language value
        payload.langId = new CountryI18nLangId(contentLanguage.id);

        // create aggregate with factory pattern
        const country = CommonCountry.register(
            payload.id,
            payload.iso3166Alpha2,
            payload.iso3166Alpha3,
            payload.iso3166Numeric,
            payload.customCode,
            payload.prefix,
            payload.image,
            payload.sort,
            payload.administrativeAreas,
            payload.latitude,
            payload.longitude,
            payload.zoom,
            payload.mapType,
            null, // availableLangs
            null, // createdAt
            new CountryUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
            payload.langId,
            payload.name,
            payload.slug,
            payload.administrativeAreaLevel1,
            payload.administrativeAreaLevel2,
            payload.administrativeAreaLevel3,
        );

        // delete availableLangs property to avoid overwrite this value in database
        delete country.availableLangs;

        // update by id
        await this.repository.updateById(
            country,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        await this.repositoryI18n.updateById(
            country,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
                dataFactory      : (aggregate: CommonCountry) => aggregate.toI18nDTO(),
                findArguments    : {
                    langId: contentLanguage.id,
                    countryId: country.id.value,
                },
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const countryRegister = this.publisher.mergeObjectContext(
            country,
        );

        countryRegister.updated(country); // apply event to model events
        countryRegister.commit(); // commit all events of model
    }
}