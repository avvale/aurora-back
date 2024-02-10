import { MessageMessage, MessageMessageResponse } from '@app/message/message';
import {
    MessageMessageAccountRecipientIds,
    MessageMessageAttachments,
    MessageMessageBody,
    MessageMessageCreatedAt,
    MessageMessageDeletedAt,
    MessageMessageId,
    MessageMessageIsImportant,
    MessageMessageMeta,
    MessageMessageReads,
    MessageMessageScopeRecipients,
    MessageMessageSendAt,
    MessageMessageStatus,
    MessageMessageSubject,
    MessageMessageTenantIds,
    MessageMessageTenantRecipientIds,
    MessageMessageTotalRecipients,
    MessageMessageUpdatedAt,
} from '@app/message/message/domain/value-objects';
import { CQMetadata, IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class MessageMessageMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param message
     */
    mapModelToAggregate(message: LiteralObject, cQMetadata?: CQMetadata): MessageMessage
    {
        if (!message) return;

        return this.makeAggregate(message, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param messages
     */
    mapModelsToAggregates(messages: LiteralObject[], cQMetadata?: CQMetadata): MessageMessage[]
    {
        if (!Array.isArray(messages)) return;

        return messages.map(message => this.makeAggregate(message, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param message
     */
    mapAggregateToResponse(message: MessageMessage): MessageMessageResponse
    {
        return this.makeResponse(message);
    }

    /**
     * Map array of aggregates to array responses
     * @param messages
     */
    mapAggregatesToResponses(messages: MessageMessage[]): MessageMessageResponse[]
    {
        if (!Array.isArray(messages)) return;

        return messages.map(message => this.makeResponse(message));
    }

    private makeAggregate(message: LiteralObject, cQMetadata?: CQMetadata): MessageMessage
    {
        return MessageMessage.register(
            new MessageMessageId(message.id, { undefinable: true }),
            new MessageMessageTenantIds(message.tenantIds, { undefinable: true }),
            new MessageMessageStatus(message.status, { undefinable: true }),
            new MessageMessageAccountRecipientIds(message.accountRecipientIds, { undefinable: true }),
            new MessageMessageTenantRecipientIds(message.tenantRecipientIds, { undefinable: true }),
            new MessageMessageScopeRecipients(message.scopeRecipients, { undefinable: true }),
            new MessageMessageSendAt(message.sendAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MessageMessageIsImportant(message.isImportant, { undefinable: true }),
            new MessageMessageSubject(message.subject, { undefinable: true }),
            new MessageMessageBody(message.body, { undefinable: true }),
            new MessageMessageAttachments(message.attachments, { undefinable: true }),
            new MessageMessageTotalRecipients(message.totalRecipients, { undefinable: true }),
            new MessageMessageReads(message.reads, { undefinable: true }),
            new MessageMessageMeta(message.meta, { undefinable: true }),
            new MessageMessageCreatedAt(message.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MessageMessageUpdatedAt(message.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new MessageMessageDeletedAt(message.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
        );
    }

    private makeResponse(message: MessageMessage): MessageMessageResponse
    {
        if (!message) return;

        return new MessageMessageResponse(
            message.id.value,
            message.tenantIds.value,
            message.status.value,
            message.accountRecipientIds.value,
            message.tenantRecipientIds.value,
            message.scopeRecipients.value,
            message.sendAt.value,
            message.isImportant.value,
            message.subject.value,
            message.body.value,
            message.attachments.value,
            message.totalRecipients.value,
            message.reads.value,
            message.meta.value,
            message.createdAt.value,
            message.updatedAt.value,
            message.deletedAt.value,
        );
    }
}
