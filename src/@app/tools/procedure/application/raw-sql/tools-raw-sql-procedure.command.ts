import { CQMetadata } from '@aurorajs.dev/core';

export class ToolsRawSQLProcedureCommand
{
    constructor(
        public readonly rawSQL?: string,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}
