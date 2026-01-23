import {
  SearchEngineAddFieldsContextEvent,
  SearchEngineIFieldRepository,
} from '@app/search-engine/field';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineDeleteFieldsService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: SearchEngineIFieldRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get objects to delete
    const fields = await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });

    if (fields.length === 0) return;

    await this.repository.delete({
      queryStatement,
      constraint,
      cQMetadata,
      deleteOptions: cQMetadata?.repositoryOptions,
    });

    // create AddFieldsContextEvent to have object wrapper to add event publisher functionality
    // insert EventBus in object, to be able to apply and commit events
    const fieldsRegistered = this.publisher.mergeObjectContext(
      new SearchEngineAddFieldsContextEvent(fields),
    );

    fieldsRegistered.deleted(); // apply event to model events
    fieldsRegistered.commit(); // commit all events of model
  }
}
