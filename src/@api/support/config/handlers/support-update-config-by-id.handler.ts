import { SupportConfig, SupportUpdateConfigByIdInput } from '@api/graphql';
import {
    SupportConfigDto,
    SupportUpdateConfigByIdDto,
} from '@api/support/config';
import {
    SupportFindConfigByIdQuery,
    SupportUpdateConfigByIdCommand,
} from '@app/support/config';
import {
    AuditingMeta,
    diff,
    ICommandBus,
    IQueryBus,
    QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportUpdateConfigByIdHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SupportUpdateConfigByIdInput | SupportUpdateConfigByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportConfig | SupportConfigDto> {
        const config = await this.queryBus.ask(
            new SupportFindConfigByIdQuery(payload.id, constraint, {
                timezone,
            }),
        );

        const dataToUpdate = diff(payload, config);

        await this.commandBus.dispatch(
            new SupportUpdateConfigByIdCommand(
                {
                    ...dataToUpdate,
                    id: payload.id,
                },
                constraint,
                {
                    timezone,
                    repositoryOptions: {
                        auditing,
                    },
                },
            ),
        );

        return await this.queryBus.ask(
            new SupportFindConfigByIdQuery(payload.id, constraint, {
                timezone,
            }),
        );
    }
}
