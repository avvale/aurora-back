import { CommonAttachmentFamily, CommonAttachmentFamilyMapper, CommonAttachmentFamilyModel, CommonIAttachmentFamilyRepository } from '@app/common/attachment-family';
import { AuditingRunner, ICriteria, LiteralObject, SequelizeRepository } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CommonSequelizeAttachmentFamilyRepository extends SequelizeRepository<CommonAttachmentFamily, CommonAttachmentFamilyModel> implements CommonIAttachmentFamilyRepository
{
    public readonly aggregateName: string = 'CommonAttachmentFamily';
    public readonly mapper: CommonAttachmentFamilyMapper = new CommonAttachmentFamilyMapper();

    constructor(
        @InjectModel(CommonAttachmentFamilyModel)
        public readonly repository: typeof CommonAttachmentFamilyModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }

    // hook called after create aggregate
    async createdAggregateHook(
        aggregate: CommonAttachmentFamily,
        model: CommonAttachmentFamilyModel,
        createOptions: LiteralObject,
    ): Promise<void>
    {
        // add many to many relation
        if (aggregate.resourceIds.length > 0)
        {
            await model.$add(
                'resources',
                aggregate.resourceIds.value,
                createOptions,
            );
        }
    }

    // hook called after create aggregate
    async updatedByIdAggregateHook(
        aggregate: CommonAttachmentFamily,
        model: CommonAttachmentFamilyModel,
        updateByIdOptions: LiteralObject,
    ): Promise<void>
    {
        // set many to many relation
        if (aggregate.resourceIds.isArray())
        {
            await model.$set(
                'resources',
                aggregate.resourceIds.value,
                updateByIdOptions,
            );
        }
    }
}
