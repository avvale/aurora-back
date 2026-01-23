import {
  SearchEngineAddCollectionsContextEvent,
  SearchEngineICollectionRepository,
} from '@app/search-engine/collection';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineDeleteCollectionsService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: SearchEngineICollectionRepository,
  ) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get objects to delete
    const collections = await this.repository.get({
      queryStatement,
      constraint,
      cQMetadata,
    });

    if (collections.length === 0) return;

    await this.repository.delete({
      queryStatement,
      constraint,
      cQMetadata,
      deleteOptions: cQMetadata?.repositoryOptions,
    });

    // create AddCollectionsContextEvent to have object wrapper to add event publisher functionality
    // insert EventBus in object, to be able to apply and commit events
    const collectionsRegistered = this.publisher.mergeObjectContext(
      new SearchEngineAddCollectionsContextEvent(collections),
    );

    collectionsRegistered.deleted(); // apply event to model events
    collectionsRegistered.commit(); // commit all events of model
  }
}
