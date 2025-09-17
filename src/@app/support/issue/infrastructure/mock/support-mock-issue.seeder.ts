import { SupportIssue, supportMockIssueData } from '@app/support/issue';
import {
    SupportIssueAccountId,
    SupportIssueAccountUsername,
    SupportIssueAttachments,
    SupportIssueBackVersion,
    SupportIssueCreatedAt,
    SupportIssueDeletedAt,
    SupportIssueDescription,
    SupportIssueEnvironment,
    SupportIssueExternalId,
    SupportIssueExternalStatus,
    SupportIssueFrontVersion,
    SupportIssueId,
    SupportIssueMeta,
    SupportIssueSubject,
    SupportIssueUpdatedAt,
    SupportIssueVideo,
} from '@app/support/issue/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class SupportMockIssueSeeder extends MockSeeder<SupportIssue>
{
    public collectionSource: SupportIssue[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const issue of _.orderBy(supportMockIssueData, ['id']))
        {
            this.collectionSource.push(
                SupportIssue.register(
                    new SupportIssueId(issue.id),
                    new SupportIssueExternalId(issue.externalId),
                    new SupportIssueExternalStatus(issue.externalStatus),
                    new SupportIssueAccountId(issue.accountId),
                    new SupportIssueAccountUsername(issue.accountUsername),
                    new SupportIssueFrontVersion(issue.frontVersion),
                    new SupportIssueBackVersion(issue.backVersion),
                    new SupportIssueEnvironment(issue.environment),
                    new SupportIssueSubject(issue.subject),
                    new SupportIssueDescription(issue.description),
                    new SupportIssueAttachments(issue.attachments),
                    new SupportIssueVideo(issue.video),
                    new SupportIssueMeta(issue.meta),
                    new SupportIssueCreatedAt({ currentTimestamp: true }),
                    new SupportIssueUpdatedAt({ currentTimestamp: true }),
                    new SupportIssueDeletedAt(null),
                ),
            );
        }
    }
}
