import { SupportCreatedConfigEvent } from '@app/support/config';
import { CQMetadata } from '@aurorajs.dev/core';

export class SupportCreatedConfigsEvent {
    constructor(
        public readonly event: {
            payload: SupportCreatedConfigEvent[];
            cQMetadata?: CQMetadata;
        },
    ) {}
}
