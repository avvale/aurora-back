import { SupportConfig, SupportIConfigRepository } from '@app/support/config';
import {
    SupportConfigApiKey,
    SupportConfigId,
    SupportConfigListId,
    SupportConfigUpdatedAt,
} from '@app/support/config/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SupportUpdateConfigByIdService {
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SupportIConfigRepository,
    ) {}

    async main(
        payload: {
            id: SupportConfigId;
            apiKey?: SupportConfigApiKey;
            listId?: SupportConfigListId;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void> {
        // create aggregate with factory pattern
        const config = SupportConfig.register(
            payload.id,
            undefined, // rowId
            payload.apiKey,
            payload.listId,
            null, // createdAt
            new SupportConfigUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(config, {
            constraint,
            cQMetadata,
            updateByIdOptions: cQMetadata?.repositoryOptions,
        });

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const configRegister = this.publisher.mergeObjectContext(config);

        configRegister.updated({
            payload: config,
            cQMetadata,
        }); // apply event to model events
        configRegister.commit(); // commit all events of model
    }
}
