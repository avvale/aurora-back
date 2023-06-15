import { CommonLangDto } from '../dto';
import { CommonLang } from '@api/graphql';
import { FindLangByIdQuery } from '@app/common/lang/application/find/find-lang-by-id.query';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonFindLangByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<CommonLang | CommonLangDto>
    {
        return await this.queryBus.ask(new FindLangByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}