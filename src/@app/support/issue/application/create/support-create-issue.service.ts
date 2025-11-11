import { SupportIIssueRepository, SupportIssue } from '@app/support/issue';
import {
    SupportIssueAccountId,
    SupportIssueAccountUsername,
    SupportIssueAttachments,
    SupportIssueBackVersion,
    SupportIssueCreatedAt,
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
import { CQMetadata } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SupportCreateIssueService {
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SupportIIssueRepository,
    ) {}

    async main(
        payload: {
            id: SupportIssueId;
            externalId: SupportIssueExternalId;
            externalStatus: SupportIssueExternalStatus;
            accountId: SupportIssueAccountId;
            accountUsername: SupportIssueAccountUsername;
            frontVersion: SupportIssueFrontVersion;
            backVersion: SupportIssueBackVersion;
            environment: SupportIssueEnvironment;
            subject: SupportIssueSubject;
            description: SupportIssueDescription;
            attachments: SupportIssueAttachments;
            video: SupportIssueVideo;
            meta: SupportIssueMeta;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void> {
        // create aggregate with factory pattern
        const issue = SupportIssue.register(
            payload.id,
            undefined, // rowId
            payload.externalId,
            payload.externalStatus,
            payload.accountId,
            payload.accountUsername,
            payload.frontVersion,
            payload.backVersion,
            payload.environment,
            payload.subject,
            payload.description,
            payload.attachments,
            payload.video,
            payload.meta,
            new SupportIssueCreatedAt({ currentTimestamp: true }),
            new SupportIssueUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(issue, {
            createOptions: cQMetadata?.repositoryOptions,
        });

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const issueRegister = this.publisher.mergeObjectContext(issue);

        issueRegister.created({
            payload: issue,
            cQMetadata,
        }); // apply event to model events
        issueRegister.commit(); // commit all events of model
    }
}
