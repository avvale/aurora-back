import { CommonLangDto } from '../dto';
import { CommonLang } from '@api/graphql';
import { FindLangQuery } from '@app/common/lang/application/find/find-lang.query';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonFindLangHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<CommonLang | CommonLangDto>
    {
        return await this.queryBus.ask(new FindLangQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}