import { CommonLangDto, CommonUpdateLangByIdDto } from '../dto';
import { CommonLang, CommonUpdateLangByIdInput } from '@api/graphql';
import { FindLangByIdQuery } from '@app/common/lang/application/find/find-lang-by-id.query';
import { UpsertLangCommand } from '@app/common/lang/application/upsert/upsert-lang.command';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpsertLangHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: CommonUpdateLangByIdInput | CommonUpdateLangByIdDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonLang | CommonLangDto>
    {
        await this.commandBus.dispatch(new UpsertLangCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new FindLangByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}