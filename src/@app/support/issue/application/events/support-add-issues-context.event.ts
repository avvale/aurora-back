import {
    SupportCreatedIssueEvent,
    SupportCreatedIssuesEvent,
    SupportIssue,
} from '@app/support/issue';
import { CQMetadata } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class SupportAddIssuesContextEvent extends AggregateRoot {
    constructor(
        public readonly aggregateRoots: SupportIssue[] = [],
        public readonly cQMetadata?: CQMetadata,
    ) {
        super();
    }

    *[Symbol.iterator]() {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void {
        this.apply(
            new SupportCreatedIssuesEvent({
                payload: this.aggregateRoots.map(
                    (issue) =>
                        new SupportCreatedIssueEvent({
                            payload: {
                                id: issue.id.value,
                                externalId: issue.externalId?.value,
                                externalStatus: issue.externalStatus?.value,
                                accountId: issue.accountId?.value,
                                accountUsername: issue.accountUsername?.value,
                                frontVersion: issue.frontVersion?.value,
                                backVersion: issue.backVersion?.value,
                                environment: issue.environment?.value,
                                subject: issue.subject.value,
                                description: issue.description.value,
                                attachments: issue.attachments?.value,
                                screenRecording: issue.screenRecording?.value,
                                meta: issue.meta?.value,
                                createdAt: issue.createdAt?.value,
                                updatedAt: issue.updatedAt?.value,
                                deletedAt: issue.deletedAt?.value,
                            },
                        }),
                ),
                cQMetadata: this.cQMetadata,
            }),
        );
    }
}
