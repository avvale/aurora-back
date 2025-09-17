import { SupportIIssueRepository, SupportIssue } from '@app/support/issue';
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
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class SupportUpdateIssueByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: SupportIIssueRepository,
    ) {}

    async main(
        payload: {
            id: SupportIssueId;
            externalId?: SupportIssueExternalId;
            externalStatus?: SupportIssueExternalStatus;
            accountId?: SupportIssueAccountId;
            accountUsername?: SupportIssueAccountUsername;
            frontVersion?: SupportIssueFrontVersion;
            backVersion?: SupportIssueBackVersion;
            environment?: SupportIssueEnvironment;
            subject?: SupportIssueSubject;
            description?: SupportIssueDescription;
            attachments?: SupportIssueAttachments;
            video?: SupportIssueVideo;
            meta?: SupportIssueMeta;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const issue = SupportIssue.register(
            payload.id,
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
            null, // createdAt
            new SupportIssueUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(
            issue,
            {
                constraint,
                cQMetadata,
                updateByIdOptions: cQMetadata?.repositoryOptions,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const issueRegister = this.publisher.mergeObjectContext(
            issue,
        );

        issueRegister.updated({
            payload: issue,
            cQMetadata,
        }); // apply event to model events
        issueRegister.commit(); // commit all events of model
    }
}
