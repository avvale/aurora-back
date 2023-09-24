import { CommonAttachmentFamilyResourceMapper, CommonAttachmentFamilyResourceResponse, CommonFindAttachmentFamilyResourceQuery } from '@app/common/attachment-family-resource';
import { CommonFindAttachmentFamilyResourceService } from '@app/common/attachment-family-resource/application/find/common-find-attachment-family-resource.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(CommonFindAttachmentFamilyResourceQuery)
export class CommonFindAttachmentFamilyResourceQueryHandler implements IQueryHandler<CommonFindAttachmentFamilyResourceQuery>
{
    private readonly mapper: CommonAttachmentFamilyResourceMapper = new CommonAttachmentFamilyResourceMapper();

    constructor(
        private readonly findAttachmentFamilyResourceService: CommonFindAttachmentFamilyResourceService,
    ) {}

    async execute(query: CommonFindAttachmentFamilyResourceQuery): Promise<CommonAttachmentFamilyResourceResponse>
    {
        const attachmentFamilyResource = await this.findAttachmentFamilyResourceService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(attachmentFamilyResource);
    }
}
