import { SupportConfig } from '@api/graphql';
import { SupportConfigDto } from '@api/support/config';
import { SupportFindConfigByIdQuery } from '@app/support/config';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportFindConfigByIdHandler {
    constructor(private readonly queryBus: IQueryBus) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<SupportConfig | SupportConfigDto> {
        return await this.queryBus.ask(
            new SupportFindConfigByIdQuery(id, constraint, {
                timezone,
            }),
        );
    }
}
