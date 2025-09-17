import { SupportIIssueRepository, SupportIssue, supportMockIssueData } from '@app/support/issue';
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
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportMockIssueRepository extends MockRepository<SupportIssue> implements SupportIIssueRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'SupportIssue';
    public collectionSource: SupportIssue[];

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>supportMockIssueData)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(SupportIssue.register(
                new SupportIssueId(itemCollection.id),
                new SupportIssueExternalId(itemCollection.externalId),
                new SupportIssueExternalStatus(itemCollection.externalStatus),
                new SupportIssueAccountId(itemCollection.accountId),
                new SupportIssueAccountUsername(itemCollection.accountUsername),
                new SupportIssueFrontVersion(itemCollection.frontVersion),
                new SupportIssueBackVersion(itemCollection.backVersion),
                new SupportIssueEnvironment(itemCollection.environment),
                new SupportIssueSubject(itemCollection.subject),
                new SupportIssueDescription(itemCollection.description),
                new SupportIssueAttachments(itemCollection.attachments),
                new SupportIssueVideo(itemCollection.video),
                new SupportIssueMeta(itemCollection.meta),
                new SupportIssueCreatedAt(itemCollection.createdAt),
                new SupportIssueUpdatedAt(itemCollection.updatedAt),
                new SupportIssueDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}
