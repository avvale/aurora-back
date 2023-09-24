import { CommonAttachmentFamilyMapper } from '@app/common/attachment-family';
import { CommonAttachmentFamilyResource, CommonAttachmentFamilyResourceResponse } from '@app/common/attachment-family-resource';
import {
    CommonAttachmentFamilyResourceAttachmentFamilyId,
    CommonAttachmentFamilyResourceResourceId,
} from '@app/common/attachment-family-resource/domain/value-objects';
import { CommonResourceMapper } from '@app/common/resource';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyResourceMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param attachmentFamilyResource
     */
    mapModelToAggregate(attachmentFamilyResource: LiteralObject, cQMetadata?: CQMetadata): CommonAttachmentFamilyResource
    {
        if (!attachmentFamilyResource) return;

        return this.makeAggregate(attachmentFamilyResource, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param attachmentFamiliesResources
     */
    mapModelsToAggregates(attachmentFamiliesResources: LiteralObject[], cQMetadata?: CQMetadata): CommonAttachmentFamilyResource[]
    {
        if (!Array.isArray(attachmentFamiliesResources)) return;

        return attachmentFamiliesResources.map(attachmentFamilyResource => this.makeAggregate(attachmentFamilyResource, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param attachmentFamilyResource
     */
    mapAggregateToResponse(attachmentFamilyResource: CommonAttachmentFamilyResource): CommonAttachmentFamilyResourceResponse
    {
        return this.makeResponse(attachmentFamilyResource);
    }

    /**
     * Map array of aggregates to array responses
     * @param attachmentFamiliesResources
     */
    mapAggregatesToResponses(attachmentFamiliesResources: CommonAttachmentFamilyResource[]): CommonAttachmentFamilyResourceResponse[]
    {
        if (!Array.isArray(attachmentFamiliesResources)) return;

        return attachmentFamiliesResources.map(attachmentFamilyResource => this.makeResponse(attachmentFamilyResource));
    }

    private makeAggregate(attachmentFamilyResource: LiteralObject, cQMetadata?: CQMetadata): CommonAttachmentFamilyResource
    {
        return CommonAttachmentFamilyResource.register(
            new CommonAttachmentFamilyResourceAttachmentFamilyId(attachmentFamilyResource.attachmentFamilyId, { undefinable: true }),
            new CommonAttachmentFamilyResourceResourceId(attachmentFamilyResource.resourceId, { undefinable: true }),
            this.options.eagerLoading ? new CommonAttachmentFamilyMapper({ eagerLoading: true }).mapModelToAggregate(attachmentFamilyResource.attachmentFamily, cQMetadata) : undefined,
            this.options.eagerLoading ? new CommonResourceMapper({ eagerLoading: true }).mapModelToAggregate(attachmentFamilyResource.resource, cQMetadata) : undefined,
        );
    }

    private makeResponse(attachmentFamilyResource: CommonAttachmentFamilyResource): CommonAttachmentFamilyResourceResponse
    {
        if (!attachmentFamilyResource) return;

        return new CommonAttachmentFamilyResourceResponse(
            attachmentFamilyResource.attachmentFamilyId.value,
            attachmentFamilyResource.resourceId.value,
            this.options.eagerLoading ? new CommonAttachmentFamilyMapper({ eagerLoading: true }).mapAggregateToResponse(attachmentFamilyResource.attachmentFamily) : undefined,
            this.options.eagerLoading ? new CommonResourceMapper({ eagerLoading: true }).mapAggregateToResponse(attachmentFamilyResource.resource) : undefined,
        );
    }
}
