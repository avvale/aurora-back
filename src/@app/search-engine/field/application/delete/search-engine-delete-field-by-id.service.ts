import { SearchEngineIFieldRepository } from '@app/search-engine/field';
import { SearchEngineFieldId } from '@app/search-engine/field/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SearchEngineDeleteFieldByIdService {
  constructor(
    private readonly publisher: EventPublisher,
    private readonly repository: SearchEngineIFieldRepository,
  ) {}

  async main(
    id: SearchEngineFieldId,
    constraint?: QueryStatement,
    cQMetadata?: CQMetadata,
  ): Promise<void> {
    // get object to delete
    const field = await this.repository.findById(id, {
      constraint,
      cQMetadata,
    });

    // it is not necessary to pass the constraint in the delete, if the object
    // is not found in the findById, an exception will be thrown.
    await this.repository.deleteById(field.id, {
      deleteOptions: cQMetadata?.repositoryOptions,
      cQMetadata,
    });

    // insert EventBus in object, to be able to apply and commit events
    const fieldRegister = this.publisher.mergeObjectContext(field);

    fieldRegister.deleted(field); // apply event to model events
    fieldRegister.commit(); // commit all events of model
  }
}
