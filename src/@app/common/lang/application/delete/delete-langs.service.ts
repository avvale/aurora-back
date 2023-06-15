import { ILangRepository } from '../../domain/lang.repository';
import { AddLangsContextEvent } from '../events/add-langs-context.event';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class DeleteLangsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: ILangRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const langs = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        if (langs.length === 0) return;

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddLangsContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const langsRegistered = this.publisher.mergeObjectContext(
            new AddLangsContextEvent(langs),
        );

        langsRegistered.deleted(); // apply event to model events
        langsRegistered.commit(); // commit all events of model
    }
}