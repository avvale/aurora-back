/* eslint-disable @typescript-eslint/no-unused-vars */
import { SupportIIssueRepository, supportMockIssueData, SupportMockIssueRepository } from '@app/support/issue';
import { SupportUpdateIssueByIdService } from '@app/support/issue/application/update/support-update-issue-by-id.service';
import {
    SupportIssueAccountId,
    SupportIssueAccountUsername,
    SupportIssueAttachments,
    SupportIssueBackVersion,
    SupportIssueDescription,
    SupportIssueEnvironment,
    SupportIssueExternalId,
    SupportIssueExternalStatus,
    SupportIssueFrontVersion,
    SupportIssueId,
    SupportIssueMeta,
    SupportIssueRowId,
    SupportIssueSubject,
    SupportIssueVideo,
} from '@app/support/issue/domain/value-objects';
import { CommandBus, EventBus, EventPublisher, UnhandledExceptionBus } from '@nestjs/cqrs';
import { Test, TestingModule } from '@nestjs/testing';

describe('SupportUpdateIssueByIdService', () =>
{
    let service: SupportUpdateIssueByIdService;

    beforeAll(async () =>
    {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                CommandBus,
                EventBus,
                EventPublisher,
                UnhandledExceptionBus,
                SupportUpdateIssueByIdService,
                SupportMockIssueRepository,
                {
                    provide : SupportIIssueRepository,
                    useValue: {
                        updateById: () => { /**/ },
                    },
                },
            ],
        })
            .compile();

        service = module.get(SupportUpdateIssueByIdService);
    });

    describe('main', () =>
    {
        test('SupportUpdateIssueByIdService should be defined', () =>
        {
            expect(service).toBeDefined();
        });

        test('should update a issue and emit event', async () =>
        {
            expect(
                await service.main(
                    {
                        id: new SupportIssueId(supportMockIssueData[0].id),
                        rowId: new SupportIssueRowId(supportMockIssueData[0].rowId),
                        externalId: new SupportIssueExternalId(supportMockIssueData[0].externalId),
                        externalStatus: new SupportIssueExternalStatus(supportMockIssueData[0].externalStatus),
                        accountId: new SupportIssueAccountId(supportMockIssueData[0].accountId),
                        accountUsername: new SupportIssueAccountUsername(supportMockIssueData[0].accountUsername),
                        frontVersion: new SupportIssueFrontVersion(supportMockIssueData[0].frontVersion),
                        backVersion: new SupportIssueBackVersion(supportMockIssueData[0].backVersion),
                        environment: new SupportIssueEnvironment(supportMockIssueData[0].environment),
                        subject: new SupportIssueSubject(supportMockIssueData[0].subject),
                        description: new SupportIssueDescription(supportMockIssueData[0].description),
                        attachments: new SupportIssueAttachments(supportMockIssueData[0].attachments),
                        video: new SupportIssueVideo(supportMockIssueData[0].video),
                        meta: new SupportIssueMeta(supportMockIssueData[0].meta),
                    },
                    {},
                ),
            ).toBe(undefined);
        });
    });
});
