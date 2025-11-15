import { SupportConfig, SupportCreateConfigInput } from '@api/graphql';
import { SupportConfigDto, SupportCreateConfigDto } from '@api/support/config';
import {
    SupportCreateConfigCommand,
    SupportFindConfigByIdQuery,
} from '@app/support/config';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportCreateConfigHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SupportCreateConfigInput | SupportCreateConfigDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportConfig | SupportConfigDto> {
        await this.commandBus.dispatch(
            new SupportCreateConfigCommand(payload, {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            }),
        );

        return await this.queryBus.ask(
            new SupportFindConfigByIdQuery(
                payload.id,
                {},
                {
                    timezone,
                },
            ),
        );
    }
}
