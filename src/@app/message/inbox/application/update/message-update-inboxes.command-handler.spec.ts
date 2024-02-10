import { messageMockInboxData, MessageUpdateInboxesCommand } from '@app/message/inbox';
import { MessageUpdateInboxesCommandHandler } from '@app/message/inbox/application/update/message-update-inboxes.command-handler';
import { MessageUpdateInboxesService } from '@app/message/inbox/application/update/message-update-inboxes.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('MessageUpdateInboxesCommandHandler', () =>
{
    let commandHandler: MessageUpdateInboxesCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MessageUpdateInboxesCommandHandler,
                {
                    provide : MessageUpdateInboxesService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<MessageUpdateInboxesCommandHandler>(MessageUpdateInboxesCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateInboxesCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an inboxes updated', async () =>
        {
            expect(await commandHandler.execute(
                new MessageUpdateInboxesCommand(
                    {
                        id: messageMockInboxData[0].id,
                        tenantIds: messageMockInboxData[0].tenantIds,
                        messageId: messageMockInboxData[0].messageId,
                        sort: messageMockInboxData[0].sort,
                        accountId: messageMockInboxData[0].accountId,
                        accountCode: messageMockInboxData[0].accountCode,
                        isImportant: messageMockInboxData[0].isImportant,
                        subject: messageMockInboxData[0].subject,
                        body: messageMockInboxData[0].body,
                        attachments: messageMockInboxData[0].attachments,
                        isRead: messageMockInboxData[0].isRead,
                        isReadAtLeastOnce: messageMockInboxData[0].isReadAtLeastOnce,
                        meta: messageMockInboxData[0].meta,
                    },
                    {},
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
