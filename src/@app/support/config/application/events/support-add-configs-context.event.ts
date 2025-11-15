import {
    SupportConfig,
    SupportCreatedConfigEvent,
    SupportCreatedConfigsEvent,
} from '@app/support/config';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class SupportAddConfigsContextEvent extends AggregateRoot {
    constructor(
        public readonly aggregateRoots: SupportConfig[] = [],
        public readonly cQMetadata?: CQMetadata,
    ) {
        super();
    }

    *[Symbol.iterator]() {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void {
        this.apply(
            new SupportCreatedConfigsEvent({
                payload: this.aggregateRoots.map(
                    (config) =>
                        new SupportCreatedConfigEvent({
                            payload: {
                                id: config.id.value,
                                apiKey: config.apiKey?.value,
                                listId: config.listId?.value,
                                createdAt: config.createdAt?.value,
                                updatedAt: config.updatedAt?.value,
                                deletedAt: config.deletedAt?.value,
                            },
                        }),
                ),
                cQMetadata: this.cQMetadata,
            }),
        );
    }
}
