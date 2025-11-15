import { SupportIConfigRepository } from '@app/support/config';
import { SupportConfigId } from '@app/support/config/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SupportDeleteConfigByIdService {
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SupportIConfigRepository,
    ) {}

    async main(
        id: SupportConfigId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void> {
        // get object to delete
        const config = await this.repository.findById(id, {
            constraint,
            cQMetadata,
        });

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository.deleteById(config.id, {
            deleteOptions: cQMetadata?.repositoryOptions,
            cQMetadata,
        });

        // insert EventBus in object, to be able to apply and commit events
        const configRegister = this.publisher.mergeObjectContext(config);

        configRegister.deleted({
            payload: config,
            cQMetadata,
        }); // apply event to model events
        configRegister.commit(); // commit all events of model
    }
}
