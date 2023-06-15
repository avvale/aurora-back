import { CommonLangDto, CommonUpdateLangsDto } from '../dto';
import { CommonLang, CommonUpdateLangsInput } from '@api/graphql';
import { GetLangsQuery } from '@app/common/lang/application/get/get-langs.query';
import { UpdateLangsCommand } from '@app/common/lang/application/update/update-langs.command';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonUpdateLangsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: CommonUpdateLangsInput | CommonUpdateLangsDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<CommonLang | CommonLangDto>
    {
        await this.commandBus.dispatch(new UpdateLangsCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new GetLangsQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}