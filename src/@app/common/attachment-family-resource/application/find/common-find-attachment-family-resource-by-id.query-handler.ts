import { CommonAttachmentFamilyResourceMapper, CommonAttachmentFamilyResourceResponse, CommonFindAttachmentFamilyResourceByIdQuery } from '@app/common/attachment-family-resource';
import { CommonFindAttachmentFamilyResourceByIdService } from '@app/common/attachment-family-resource/application/find/common-find-attachment-family-resource-by-id.service';
import { CommonAttachmentFamilyResourceAttachmentFamilyId, CommonAttachmentFamilyResourceResourceId } from '@app/common/attachment-family-resource/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(CommonFindAttachmentFamilyResourceByIdQuery)
export class CommonFindAttachmentFamilyResourceByIdQueryHandler implements IQueryHandler<CommonFindAttachmentFamilyResourceByIdQuery>
{
    private readonly mapper: CommonAttachmentFamilyResourceMapper = new CommonAttachmentFamilyResourceMapper();

    constructor(
        private readonly findAttachmentFamilyResourceByIdService: CommonFindAttachmentFamilyResourceByIdService,
    ) {}

    async execute(query: CommonFindAttachmentFamilyResourceByIdQuery): Promise<CommonAttachmentFamilyResourceResponse>
    {
        const attachmentFamilyResource = await this.findAttachmentFamilyResourceByIdService.main(
            new CommonAttachmentFamilyResourceAttachmentFamilyId(query.attachmentFamilyId),
            new CommonAttachmentFamilyResourceResourceId(query.resourceId),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(attachmentFamilyResource);
    }
}
