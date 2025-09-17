import { SupportIssue, SupportUpdateIssueByIdInput } from '@api/graphql';
import { SupportIssueDto, SupportUpdateIssueByIdDto } from '@api/support/issue';
import { SupportFindIssueByIdQuery, SupportUpdateIssueByIdCommand } from '@app/support/issue';
import { AuditingMeta, diff, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportUpdateIssueByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: SupportUpdateIssueByIdInput | SupportUpdateIssueByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportIssue | SupportIssueDto>
    {
        const issue = await this.queryBus.ask(new SupportFindIssueByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = diff(payload, issue);

        await this.commandBus.dispatch(new SupportUpdateIssueByIdCommand(
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
        ));

        return await this.queryBus.ask(new SupportFindIssueByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}
