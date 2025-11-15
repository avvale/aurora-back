import { SupportConfig, SupportIConfigRepository } from '@app/support/config';
import { SupportConfigId } from '@app/support/config/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportFindConfigByIdService {
    constructor(private readonly repository: SupportIConfigRepository) {}

    async main(
        id: SupportConfigId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<SupportConfig> {
        return await this.repository.findById(id, {
            constraint,
            cQMetadata,
        });
    }
}
