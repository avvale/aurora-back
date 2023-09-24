import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { CommonCreateAttachmentFamiliesResourcesCommand } from '@app/common/attachment-family-resource';
import { commonMockAttachmentFamilyResourceData } from '@app/common/attachment-family-resource';

@Injectable()
export class CommonAttachmentFamilyResourceSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new CommonCreateAttachmentFamiliesResourcesCommand(
            commonMockAttachmentFamilyResourceData,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}
