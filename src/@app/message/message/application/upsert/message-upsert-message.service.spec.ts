/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessageIMessageRepository, messageMockMessageData, MessageMockMessageRepository } from '@app/message/message';
import { MessageUpsertMessageService } from '@app/message/message/application/upsert/message-upsert-message.service';
import {
    MessageMessageAccountRecipientIds,
    MessageMessageAttachments,
    MessageMessageBody,
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
} from '@app/message/message/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessageUpsertMessageService', () =>

{
    let service: MessageUpsertMessageService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MessageUpsertMessageService,
                MessageMockMessageRepository,
                {
                    provide : MessageIMessageRepository,
                    useValue: {
                        upsert: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MessageUpsertMessageService);
    });

    describe('main', () =>
    {
        test('MessageUpsertMessageService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should upsert a message and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new MessageMessageId(messageMockMessageData[0].id),
                        tenantIds: new MessageMessageTenantIds(messageMockMessageData[0].tenantIds),
                        status: new MessageMessageStatus(messageMockMessageData[0].status),
                        accountRecipientIds: new MessageMessageAccountRecipientIds(messageMockMessageData[0].accountRecipientIds),
                        tenantRecipientIds: new MessageMessageTenantRecipientIds(messageMockMessageData[0].tenantRecipientIds),
                        scopeRecipients: new MessageMessageScopeRecipients(messageMockMessageData[0].scopeRecipients),
                        sendAt: new MessageMessageSendAt(messageMockMessageData[0].sendAt),
                        isImportant: new MessageMessageIsImportant(messageMockMessageData[0].isImportant),
                        subject: new MessageMessageSubject(messageMockMessageData[0].subject),
                        body: new MessageMessageBody(messageMockMessageData[0].body),
                        attachments: new MessageMessageAttachments(messageMockMessageData[0].attachments),
                        totalRecipients: new MessageMessageTotalRecipients(messageMockMessageData[0].totalRecipients),
                        reads: new MessageMessageReads(messageMockMessageData[0].reads),
                        meta: new MessageMessageMeta(messageMockMessageData[0].meta),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
