import { SearchEngineFieldDto, SearchEngineUpdateFieldByIdDto } from '../dto';
import { SearchEngineField, SearchEngineUpdateFieldByIdInput } from '@api/graphql';
import { SearchEngineFindFieldByIdQuery, SearchEngineUpsertFieldCommand } from '@app/search-engine/field';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineUpsertFieldHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SearchEngineUpdateFieldByIdInput | SearchEngineUpdateFieldByIdDto,
        timezone?: string,
    ): Promise<SearchEngineField | SearchEngineFieldDto>
    {
        await this.commandBus.dispatch(new SearchEngineUpsertFieldCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new SearchEngineFindFieldByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}