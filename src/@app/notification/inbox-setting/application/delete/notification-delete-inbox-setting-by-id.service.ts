import { NotificationIInboxSettingRepository } from '@app/notification/inbox-setting';
import { NotificationInboxSettingId } from '@app/notification/inbox-setting/domain/value-objects';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class NotificationDeleteInboxSettingByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: NotificationIInboxSettingRepository,
    ) {}

    async main(
        id: NotificationInboxSettingId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const inboxSetting = await this.repository
            .findById(
                id,
                {
                    constraint,
                    cQMetadata,
                },
            );

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository
            .deleteById(
                inboxSetting.id,
                {
                    deleteOptions: cQMetadata?.repositoryOptions,
                    cQMetadata,
                },
            );

        // insert EventBus in object, to be able to apply and commit events
        const inboxSettingRegister = this.publisher.mergeObjectContext(inboxSetting);

        inboxSettingRegister.deleted(inboxSetting); // apply event to model events
        inboxSettingRegister.commit(); // commit all events of model
    }
}
