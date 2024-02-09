import { NotificationIInboxSettingRepository, NotificationInboxSetting } from '@app/notification/inbox-setting';
import { CQMetadata, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationPaginateInboxSettingsService
{
    constructor(
        private readonly repository: NotificationIInboxSettingRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<Pagination<NotificationInboxSetting>>
    {
        return await this.repository.paginate({
            queryStatement,
            constraint,
            cQMetadata,
        });
    }
}
