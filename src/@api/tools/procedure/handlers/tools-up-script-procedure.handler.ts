import { ToolsFindProcedureByIdQuery } from '@app/tools/procedure';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ToolsUpScriptProcedureHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        procedureId: string,
        timezone?: string,
    ): Promise<boolean>
    {
        const procedure = await this.queryBus.ask(new ToolsFindProcedureByIdQuery(
            procedureId,
            {},
            {
                timezone,
            },
        ));

        /* await this.commandBus.dispatch(new ToolsRawSQLProcedureCommand(
            procedure.upScript,
            {
                timezone,
            },
        )); */

        return true;
    }
}