import { SupportConfig } from '@api/graphql';
import { SupportConfigDto } from '@api/support/config';
import {
    SupportDeleteConfigByIdCommand,
    SupportFindConfigByIdQuery,
} from '@app/support/config';
import {
    AuditingMeta,
    ICommandBus,
    IQueryBus,
    QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportDeleteConfigByIdHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportConfig | SupportConfigDto> {
        const config = await this.queryBus.ask(
            new SupportFindConfigByIdQuery(id, constraint, {
                timezone,
            }),
        );

        await this.commandBus.dispatch(
            new SupportDeleteConfigByIdCommand(id, constraint, {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            }),
        );

        return config;
    }
}
