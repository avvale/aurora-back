import { ICountryI18nRepository } from '../../domain/country-i18n.repository';
import { ICountryRepository } from '../../domain/country.repository';
import { AddCountriesContextEvent } from '../events/add-countries-context.event';
import { CQMetadata, Operator, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class DeleteCountriesService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: ICountryRepository,
        private readonly repositoryI18n: ICountryI18nRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        const fallbackLang = cQMetadata.meta.fallbackLang;
        const contentLanguage = cQMetadata.meta.contentLanguage;

        // get objects to delete
        const countries = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (countries.length === 0) return;

        if (countries[0].langId.value === fallbackLang.id)
        {
            // delete all translations if delete fallback language
            await this.repository.delete({
                queryStatement,
                constraint,
                cQMetadata,
                deleteOptions: cQMetadata?.repositoryOptions,
            });

            await this.repositoryI18n.delete({
                queryStatement: {
                    where: {
                        countryId: {
                            [Operator.in]: countries.map(item => item.id),
                        },
                    },
                },
                deleteOptions: cQMetadata?.repositoryOptions,
            });
        }
        else
        {
            await this.repositoryI18n.delete({
                queryStatement: {
                    where: {
                        countryId: {
                            [Operator.in]: countries.map(item => item.id),
                        },
                        langId: contentLanguage.id,
                    },
                },
                deleteOptions: cQMetadata?.repositoryOptions,
            });
        }

        // create AddCountriesContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const countriesRegistered = this.publisher.mergeObjectContext(
            new AddCountriesContextEvent(countries),
        );

        countriesRegistered.deleted(); // apply event to model events
        countriesRegistered.commit(); // commit all events of model
    }
}