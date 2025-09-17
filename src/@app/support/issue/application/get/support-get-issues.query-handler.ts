import { SupportGetIssuesQuery, SupportIssueMapper, SupportIssueResponse } from '@app/support/issue';
import { SupportGetIssuesService } from '@app/support/issue/application/get/support-get-issues.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SupportGetIssuesQuery)
export class SupportGetIssuesQueryHandler implements IQueryHandler<SupportGetIssuesQuery>
{
    private readonly mapper: SupportIssueMapper = new SupportIssueMapper();

    constructor(
        private readonly getIssuesService: SupportGetIssuesService,
    ) {}

    async execute(query: SupportGetIssuesQuery): Promise<SupportIssueResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getIssuesService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
