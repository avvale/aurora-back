import { SupportCreateIssueInput, SupportIssue } from '@api/graphql';
import { SupportCreateIssueDto, SupportIssueDto } from '@api/support/issue';
import { SupportCreateIssueCommand, SupportFindIssueByIdQuery } from '@app/support/issue';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportCreateIssueHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SupportCreateIssueInput | SupportCreateIssueDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportIssue | SupportIssueDto>
    {
        await this.commandBus.dispatch(new SupportCreateIssueCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return await this.queryBus.ask(new SupportFindIssueByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
