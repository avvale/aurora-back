import { CommonCreateAttachmentFamilyResourceDto } from '@api/common/attachment-family-resource';
import { CommonCreateAttachmentFamilyResourceInput } from '@api/graphql';
import { CommonCreateAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonCreateAttachmentFamiliesResourcesHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: CommonCreateAttachmentFamilyResourceInput[] | CommonCreateAttachmentFamilyResourceDto[],
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new CommonCreateAttachmentFamiliesResourcesCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        return true;
    }
}
