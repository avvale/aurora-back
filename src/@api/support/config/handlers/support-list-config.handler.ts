import { SupportConfig } from '@api/graphql';
import {
    AuditingMeta,
    ICommandBus,
    IQueryBus,
    QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { SupportConfigDto } from '../dto';

@Injectable()
export class SupportListConfigHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportConfig[] | SupportConfigDto[]> {
        // coding here
        /* await this.commandBus.dispatch(new YourCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));
        await this.queryBus.ask(new YourQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        )); */

        return [];
    }
}
