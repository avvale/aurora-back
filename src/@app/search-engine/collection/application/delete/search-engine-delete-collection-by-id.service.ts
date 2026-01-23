import { SearchEngineICollectionRepository } from '@app/search-engine/collection';
import { SearchEngineCollectionId } from '@app/search-engine/collection/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineDeleteCollectionByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: SearchEngineICollectionRepository,
  ) {}

  async main(
    id: SearchEngineCollectionId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const collection = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(collection.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const collectionRegister = this.publisher.mergeObjectContext(collection);

    collectionRegister.deleted(collection); // apply event to model events
    collectionRegister.commit(); // commit all events of model
  }
}
