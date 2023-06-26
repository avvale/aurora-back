import { SearchEngineFieldDto } from '../dto';
import { SearchEngineField } from '@api/graphql';
import { SearchEngineDeleteFieldByIdCommand, SearchEngineFindFieldByIdQuery } from '@app/search-engine/field';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineDeleteFieldByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineField | SearchEngineFieldDto>
    {
        const field = await this.queryBus.ask(new SearchEngineFindFieldByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new SearchEngineDeleteFieldByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return field;
    }
}