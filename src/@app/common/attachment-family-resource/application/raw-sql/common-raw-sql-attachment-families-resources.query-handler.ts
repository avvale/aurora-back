import { CommonAttachmentFamilyResourceMapper, CommonAttachmentFamilyResourceResponse, CommonRawSQLAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { CommonRawSQLAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/raw-sql/common-raw-sql-attachment-families-resources.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(CommonRawSQLAttachmentFamiliesResourcesQuery)
export class CommonRawSQLAttachmentFamiliesResourcesQueryHandler implements IQueryHandler<CommonRawSQLAttachmentFamiliesResourcesQuery>
{
    private readonly mapper: CommonAttachmentFamilyResourceMapper = new CommonAttachmentFamilyResourceMapper();

    constructor(
        private readonly rawSQLAttachmentFamiliesResourcesService: CommonRawSQLAttachmentFamiliesResourcesService,
    ) {}

    async execute(query: CommonRawSQLAttachmentFamiliesResourcesQuery): Promise<CommonAttachmentFamilyResourceResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLAttachmentFamiliesResourcesService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}
