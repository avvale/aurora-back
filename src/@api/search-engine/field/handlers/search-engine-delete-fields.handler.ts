import { SearchEngineFieldDto } from '../dto';
import { SearchEngineField } from '@api/graphql';
import { SearchEngineDeleteFieldsCommand, SearchEngineGetFieldsQuery } from '@app/search-engine/field';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineDeleteFieldsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineField[] | SearchEngineFieldDto[]>
    {
        const fields = await this.queryBus.ask(new SearchEngineGetFieldsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new SearchEngineDeleteFieldsCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return fields;
    }
}