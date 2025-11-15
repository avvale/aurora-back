import { SupportConfig } from '@api/graphql';
import { SupportConfigDto } from '@api/support/config';
import { SupportGetConfigsQuery } from '@app/support/config';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportGetConfigsHandler {
    constructor(private readonly queryBus: IQueryBus) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SupportConfig[] | SupportConfigDto[]> {
        return await this.queryBus.ask(
            new SupportGetConfigsQuery(queryStatement, constraint, {
                timezone,
            }),
        );
    }
}
