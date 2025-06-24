/* eslint-disable key-spacing */
import { ToolsCreateProceduresCommand } from '@app/tools/procedure';
import { ToolsCreateProceduresService } from '@app/tools/procedure/application/create/tools-create-procedures.service';
import {
    ToolsProcedureCheckedAt,
    ToolsProcedureDownScript,
    ToolsProcedureExecutedAt,
    ToolsProcedureId,
    ToolsProcedureIsActive,
    ToolsProcedureIsUpdated,
    ToolsProcedureName,
    ToolsProcedureType,
    ToolsProcedureUpScript,
    ToolsProcedureVersion,
} from '@app/tools/procedure/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(ToolsCreateProceduresCommand)
export class ToolsCreateProceduresCommandHandler implements ICommandHandler<ToolsCreateProceduresCommand>
{
    constructor(
        private readonly createProceduresService: ToolsCreateProceduresService,
    ) {}

    async execute(command: ToolsCreateProceduresCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createProceduresService.main(
            command.payload
                .map(procedure =>
                {
                    return {
                        id: new ToolsProcedureId(procedure.id),
                        name: new ToolsProcedureName(procedure.name),
                        type: new ToolsProcedureType(procedure.type),
                        version: new ToolsProcedureVersion(procedure.version),
                        isActive: new ToolsProcedureIsActive(procedure.isActive),
                        isUpdated: new ToolsProcedureIsUpdated(procedure.isUpdated),
                        upScript: new ToolsProcedureUpScript(procedure.upScript),
                        downScript: new ToolsProcedureDownScript(procedure.downScript),
                        executedAt: new ToolsProcedureExecutedAt(procedure.executedAt, {}, { removeTimezone: command.cQMetadata?.timezone }),
                        checkedAt: new ToolsProcedureCheckedAt(procedure.checkedAt, {}, { removeTimezone: command.cQMetadata?.timezone }),
                    };
                }),
            command.cQMetadata,
        );
    }
}
