import { CommonAttachmentFamilyResourceMapper, CommonAttachmentFamilyResourceResponse, CommonGetAttachmentFamiliesResourcesQuery } from '@app/common/attachment-family-resource';
import { CommonGetAttachmentFamiliesResourcesService } from '@app/common/attachment-family-resource/application/get/common-get-attachment-families-resources.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(CommonGetAttachmentFamiliesResourcesQuery)
export class CommonGetAttachmentFamiliesResourcesQueryHandler implements IQueryHandler<CommonGetAttachmentFamiliesResourcesQuery>
{
    private readonly mapper: CommonAttachmentFamilyResourceMapper = new CommonAttachmentFamilyResourceMapper();

    constructor(
        private readonly getAttachmentFamiliesResourcesService: CommonGetAttachmentFamiliesResourcesService,
    ) {}

    async execute(query: CommonGetAttachmentFamiliesResourcesQuery): Promise<CommonAttachmentFamilyResourceResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(
            await this.getAttachmentFamiliesResourcesService.main(
                query.queryStatement,
                query.constraint,
                query.cQMetadata,
            ),
        );
    }
}
