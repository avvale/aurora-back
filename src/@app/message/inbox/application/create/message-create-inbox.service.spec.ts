/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessageIInboxRepository, messageMockInboxData, MessageMockInboxRepository } from '@app/message/inbox';
import { MessageCreateInboxService } from '@app/message/inbox/application/create/message-create-inbox.service';
import {
    MessageInboxAccountCode,
    MessageInboxAccountId,
    MessageInboxAttachments,
    MessageInboxBody,
    MessageInboxId,
    MessageInboxIsImportant,
    MessageInboxIsRead,
    MessageInboxIsReadAtLeastOnce,
    MessageInboxMessageId,
    MessageInboxMeta,
    MessageInboxSort,
    MessageInboxSubject,
    MessageInboxTenantIds,
} from '@app/message/inbox/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessageCreateInboxService', () =>

{
    let service: MessageCreateInboxService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                MessageCreateInboxService,
                MessageMockInboxRepository,
                {
                    provide : MessageIInboxRepository,
                    useValue: {
                        create: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(MessageCreateInboxService);
    });

    describe('main', () =>
    {
        test('MessageCreateInboxService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should create a inbox and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new MessageInboxId(messageMockInboxData[0].id),
                        tenantIds: new MessageInboxTenantIds(messageMockInboxData[0].tenantIds),
                        messageId: new MessageInboxMessageId(messageMockInboxData[0].messageId),
                        sort: new MessageInboxSort(messageMockInboxData[0].sort),
                        accountId: new MessageInboxAccountId(messageMockInboxData[0].accountId),
                        accountCode: new MessageInboxAccountCode(messageMockInboxData[0].accountCode),
                        isImportant: new MessageInboxIsImportant(messageMockInboxData[0].isImportant),
                        subject: new MessageInboxSubject(messageMockInboxData[0].subject),
                        body: new MessageInboxBody(messageMockInboxData[0].body),
                        attachments: new MessageInboxAttachments(messageMockInboxData[0].attachments),
                        isRead: new MessageInboxIsRead(messageMockInboxData[0].isRead),
                        isReadAtLeastOnce: new MessageInboxIsReadAtLeastOnce(messageMockInboxData[0].isReadAtLeastOnce),
                        meta: new MessageInboxMeta(messageMockInboxData[0].meta),
                    },
                ),
            )
                .toBe(undefined);
        });
    });
});
