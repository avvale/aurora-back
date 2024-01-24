import { SearchEngineField, SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import { SearchEngineFieldDto, SearchEngineUpdateFieldByIdDto } from '@api/search-engine/field';
import { SearchEngineFindFieldByIdQuery, SearchEngineUpdateFieldByIdCommand } from '@app/search-engine/field';
import { ICommandBus, IQueryBus, QueryStatement, diff } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineUpdateFieldByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SearchEngineUpdateFieldByIdInput | SearchEngineUpdateFieldByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SearchEngineField | SearchEngineFieldDto>
    {
        const field = await this.queryBus.ask(new SearchEngineFindFieldByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, field);

        await this.commandBus.dispatch(new SearchEngineUpdateFieldByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new SearchEngineFindFieldByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
