import { supportMockIssueData, SupportUpdateIssueByIdCommand } from '@app/support/issue';
import { SupportUpdateIssueByIdCommandHandler } from '@app/support/issue/application/update/support-update-issue-by-id.command-handler';
import { SupportUpdateIssueByIdService } from '@app/support/issue/application/update/support-update-issue-by-id.service';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportUpdateIssueByIdCommandHandler', () =>
{
    let commandHandler: SupportUpdateIssueByIdCommandHandler;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                SupportUpdateIssueByIdCommandHandler,
                {
                    provide : SupportUpdateIssueByIdService,
                    useValue: {
                        main: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        commandHandler = module.get<SupportUpdateIssueByIdCommandHandler>(SupportUpdateIssueByIdCommandHandler);
    });

    describe('main', () =>
    {
        test('UpdateIssueByIdCommandHandler should be defined', () =>
        {
            expect(commandHandler).toBeDefined();
        });

        test('should return an issue created', async () =>
        {
            expect(await commandHandler.execute(
                new SupportUpdateIssueByIdCommand(
                    {
                        id: supportMockIssueData[0].id,
                        rowId: supportMockIssueData[0].rowId,
                        externalId: supportMockIssueData[0].externalId,
                        externalStatus: supportMockIssueData[0].externalStatus,
                        accountId: supportMockIssueData[0].accountId,
                        accountUsername: supportMockIssueData[0].accountUsername,
                        frontVersion: supportMockIssueData[0].frontVersion,
                        backVersion: supportMockIssueData[0].backVersion,
                        environment: supportMockIssueData[0].environment,
                        subject: supportMockIssueData[0].subject,
                        description: supportMockIssueData[0].description,
                        attachments: supportMockIssueData[0].attachments,
                        video: supportMockIssueData[0].video,
                        meta: supportMockIssueData[0].meta,
                    },
                    {},
                    { timezone: process.env.TZ },
                ),
            )).toBe(undefined);
        });
    });
});
