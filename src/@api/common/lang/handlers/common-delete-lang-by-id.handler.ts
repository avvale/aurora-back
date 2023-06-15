import { CommonLangDto } from '../dto';
import { CommonLang } from '@api/graphql';
import { DeleteLangByIdCommand } from '@app/common/lang/application/delete/delete-lang-by-id.command';
import { FindLangByIdQuery } from '@app/common/lang/application/find/find-lang-by-id.query';
import { AuditingMeta, CoreGetLangsService, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonDeleteLangByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly coreGetLangsService: CoreGetLangsService,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonLang | CommonLangDto>
    {
        const lang = await this.queryBus.ask(new FindLangByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new DeleteLangByIdCommand(
            id,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        // init cache langs to update langs
        await this.coreGetLangsService.init();

        return lang;
    }
}