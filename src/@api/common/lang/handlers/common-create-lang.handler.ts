import { CommonCreateLangDto, CommonLangDto } from '../dto';
import { CommonCreateLangInput, CommonLang } from '@api/graphql';
import { CreateLangCommand } from '@app/common/lang/application/create/create-lang.command';
import { FindLangByIdQuery } from '@app/common/lang/application/find/find-lang-by-id.query';
import { AuditingMeta, CoreGetLangsService, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonCreateLangHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly coreGetLangsService: CoreGetLangsService,
    ) {}

    async main(
        payload: CommonCreateLangInput | CommonCreateLangDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonLang | CommonLangDto>
    {
        await this.commandBus.dispatch(new CreateLangCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        // init cache langs to update langs
        await this.coreGetLangsService.init();

        return await this.queryBus.ask(new FindLangByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}