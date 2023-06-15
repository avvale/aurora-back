import { CommonLangDto } from '../dto';
import { CommonLang } from '@api/graphql';
import { DeleteLangsCommand } from '@app/common/lang/application/delete/delete-langs.command';
import { GetLangsQuery } from '@app/common/lang/application/get/get-langs.query';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonDeleteLangsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonLang[] | CommonLangDto[]>
    {
        const langs = await this.queryBus.ask(new GetLangsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new DeleteLangsCommand(
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return langs;
    }
}