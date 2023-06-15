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
import { CQMetadata, Utils } from '@aurorajs.dev/core';
import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import * as _ from 'lodash';

@Injectable()
export class CommonUpsertCountryService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: CommonICountryRepository,
        private readonly repositoryI18n: CommonICountryI18nRepository,
    ) {}

    async main(
        payload: {
            id: CountryId;
            iso3166Alpha2: CountryIso3166Alpha2;
            iso3166Alpha3: CountryIso3166Alpha3;
            iso3166Numeric: CountryIso3166Numeric;
            customCode: CountryCustomCode;
            prefix: CountryPrefix;
            image: CountryImage;
            sort: CountrySort;
            administrativeAreas: CountryAdministrativeAreas;
            latitude: CountryLatitude;
            longitude: CountryLongitude;
            zoom: CountryZoom;
            mapType: CountryMapType;
            langId: CountryI18nLangId;
            name: CountryI18nName;
            slug: CountryI18nSlug;
            administrativeAreaLevel1: CountryI18nAdministrativeAreaLevel1;
            administrativeAreaLevel2: CountryI18nAdministrativeAreaLevel2;
            administrativeAreaLevel3: CountryI18nAdministrativeAreaLevel3;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        const contentLanguage = cQMetadata.meta.contentLanguage;

        // override langId value object with header content-language value
        payload.langId = new CountryI18nLangId(contentLanguage.id);

        // upsert aggregate with factory pattern
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
            new CountryCreatedAt({ currentTimestamp: true }),
            new CountryUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
            payload.langId,
            payload.name,
            payload.slug,
            payload.administrativeAreaLevel1,
            payload.administrativeAreaLevel2,
            payload.administrativeAreaLevel3,
        );

        try
        {
            // try get object from database
            const countryInDB = await this.repository.findById(
                country.id,
                {
                    constraint: {
                        include: ['countryI18n'],
                    },
                },
            );

            if (countryInDB.availableLangs.value.includes(contentLanguage.id)) throw new ConflictException(`Error to upsert CommonCountry, the id ${contentLanguage.id} already exist in database`);

            // add new lang id to data lang field to upsert field
            country.availableLangs = new CountryAvailableLangs(_.union(countryInDB.availableLangs.value, [contentLanguage.id]));
            await this.repository.update(
                country,
                {
                    dataFactory  : aggregate => _.pick(aggregate.toI18nDTO(), 'id', 'availableLangs'),
                    updateOptions: cQMetadata?.repositoryOptions,
                },
            );
        }
        catch (error)
        {
            if (error instanceof NotFoundException)
            {
                country.availableLangs = new CountryAvailableLangs([contentLanguage.id]);
                await this.repository
                    .upsert(
                        country,
                        {
                            upsertOptions: cQMetadata?.repositoryOptions,
                        },
                    );
            }
        }

        const modelInDB = await this.repositoryI18n
            .find({
                queryStatement: {
                    where: {
                        countryId: country.id.value,
                        langId: contentLanguage.id,
                    },
                },
            });

        // upsert i18n aggregate with factory pattern for upsert repository method
        const countryI18n = CommonCountry.register(
            new CountryId(modelInDB ? modelInDB.id.value : Utils.uuid()),
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
            country.availableLangs,
            new CountryCreatedAt({ currentTimestamp: true }),
            new CountryUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
            payload.langId,
            payload.name,
            payload.slug,
            payload.administrativeAreaLevel1,
            payload.administrativeAreaLevel2,
            payload.administrativeAreaLevel3,
        );

        // save new i18n record
        await this.repositoryI18n
            .upsert(
                countryI18n,
                {
                    dataFactory  : (aggregate: CommonCountry ) => aggregate.toI18nDTO(),
                    upsertOptions: cQMetadata?.repositoryOptions,
                },
            );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const countryRegister = this.publisher.mergeObjectContext(
            country,
        );

        countryRegister.created(country); // apply event to model events
        countryRegister.commit(); // commit all events of model
    }
}