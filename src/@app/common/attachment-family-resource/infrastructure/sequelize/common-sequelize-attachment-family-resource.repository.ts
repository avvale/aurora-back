import { CommonAttachmentFamilyResource, CommonAttachmentFamilyResourceMapper, CommonAttachmentFamilyResourceModel, CommonIAttachmentFamilyResourceRepository } from '@app/common/attachment-family-resource';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CommonSequelizeAttachmentFamilyResourceRepository extends SequelizeRepository<CommonAttachmentFamilyResource, CommonAttachmentFamilyResourceModel> implements CommonIAttachmentFamilyResourceRepository
{
    public readonly aggregateName: string = 'CommonAttachmentFamilyResource';
    public readonly mapper: CommonAttachmentFamilyResourceMapper = new CommonAttachmentFamilyResourceMapper();

    constructor(
        @InjectModel(CommonAttachmentFamilyResourceModel)
        public readonly repository: typeof CommonAttachmentFamilyResourceModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}
