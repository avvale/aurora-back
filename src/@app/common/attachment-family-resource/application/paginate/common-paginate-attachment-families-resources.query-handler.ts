import { CommonPaginateAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { CommonPaginateAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/paginate/common-paginate-attachment-families-resources.service';
import { PaginationResponse } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(CommonPaginateAttachmentFamiliesResourcesQuery)
export class CommonPaginateAttachmentFamiliesResourcesQueryHandler implements IQueryHandler<CommonPaginateAttachmentFamiliesResourcesQuery>
{
    constructor(
        private readonly paginateAttachmentFamiliesResourcesService: CommonPaginateAttachmentFamiliesResourcesService,
    ) {}

    async execute(query: CommonPaginateAttachmentFamiliesResourcesQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateAttachmentFamiliesResourcesService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}
