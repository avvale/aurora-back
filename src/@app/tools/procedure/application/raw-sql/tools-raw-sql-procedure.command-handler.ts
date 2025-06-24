import { ToolsRawSQLProcedureCommand } from '@app/tools/procedure';
import { ToolsRawSQLProceduresService } from '@app/tools/procedure/application/raw-sql/tools-raw-sql-procedures.service';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(ToolsRawSQLProcedureCommand)
export class ToolsRawSQLProcedureCommandHandler implements ICommandHandler<ToolsRawSQLProcedureCommand>
{
    constructor(
        private readonly rawSQLProceduresService: ToolsRawSQLProceduresService,
    ) {}

    async execute(query: ToolsRawSQLProcedureCommand): Promise<void>
    {
        await this.rawSQLProceduresService.main(
            query.rawSQL,
            query.cQMetadata,
        );
    }
}
