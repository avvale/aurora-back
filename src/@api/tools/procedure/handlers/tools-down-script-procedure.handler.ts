import { ToolsRawSQLInformationSchemasQuery } from '@app/tools/information-schema';
import { ToolsFindProcedureByIdQuery } from '@app/tools/procedure';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ToolsDownScriptProcedureHandler
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

        const res = await this.queryBus.ask(new ToolsRawSQLInformationSchemasQuery(
            `
                SELECT routine_name, routine_type, data_type
                    FROM information_schema.routines
                    WHERE routine_name = 'set_updated_at'
                    AND routine_type = 'FUNCTION';
            `,
            {
                timezone,
            },
        ));

         /* const res = await this.queryBus.ask(new ToolsRawSQLProceduresQuery(
            `
                SELECT event_object_table AS "eventObjectTable",
                    trigger_name AS "triggerName",
                    action_timing AS "actionTiming",
                    event_manipulation AS "eventManipulation"
                FROM information_schema.triggers
                WHERE trigger_name = 'trigger_set_updated_at';
            `,
            {
                timezone,
            },
        )); */

        console.log('res', res);


        /* await this.commandBus.dispatch(new ToolsRawSQLProcedureCommand(
            procedure.downScript,
            {
                timezone,
            },
        )); */

        return true;
    }
}