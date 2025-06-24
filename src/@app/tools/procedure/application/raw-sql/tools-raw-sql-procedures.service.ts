import { ToolsIProcedureRepository } from '@app/tools/procedure';
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ToolsRawSQLProceduresService
{
    constructor(
        private readonly repository: ToolsIProcedureRepository,
    ) {}

    async main(
        rawSQL?: string,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        await this.repository.rawSQL({
            rawSQL,
            cQMetadata,
        });
    }
}
