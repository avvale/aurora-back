import { SearchEngineCreateFieldDto } from '../dto';
import { SearchEngineCreateFieldInput } from '@api/graphql';
import { SearchEngineCreateFieldsCommand } from '@app/search-engine/field';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchEngineCreateFieldsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: SearchEngineCreateFieldInput[] | SearchEngineCreateFieldDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new SearchEngineCreateFieldsCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}