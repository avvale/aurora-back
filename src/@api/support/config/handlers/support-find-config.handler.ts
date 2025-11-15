import { SupportConfig } from '@api/graphql';
import { SupportConfigDto } from '@api/support/config';
import { SupportFindConfigQuery } from '@app/support/config';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportFindConfigHandler {
    constructor(private readonly queryBus: IQueryBus) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SupportConfig | SupportConfigDto> {
        return await this.queryBus.ask(
            new SupportFindConfigQuery(queryStatement, constraint, {
                timezone,
            }),
        );
    }
}
