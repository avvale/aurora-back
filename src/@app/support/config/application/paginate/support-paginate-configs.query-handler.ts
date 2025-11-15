import { SupportPaginateConfigsQuery } from '@app/support/config';
import { SupportPaginateConfigsService } from '@app/support/config/application/paginate/support-paginate-configs.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SupportPaginateConfigsQuery)
export class SupportPaginateConfigsQueryHandler
    implements IQueryHandler<SupportPaginateConfigsQuery>
{
    constructor(
        private readonly paginateConfigsService: SupportPaginateConfigsService,
    ) {}

    async execute(
        query: SupportPaginateConfigsQuery,
    ): Promise<PaginationResponse> {
        const { total, count, rows } = await this.paginateConfigsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map((item) => item.toDTO()),
        );
    }
}
