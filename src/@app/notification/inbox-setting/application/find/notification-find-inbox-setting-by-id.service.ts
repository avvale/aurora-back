import { NotificationIInboxSettingRepository, NotificationInboxSetting } from '@app/notification/inbox-setting';
import { NotificationInboxSettingId } from '@app/notification/inbox-setting/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationFindInboxSettingByIdService
{
    constructor(
        private readonly repository: NotificationIInboxSettingRepository,
    ) {}

    async main(
        id: NotificationInboxSettingId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<NotificationInboxSetting>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}
