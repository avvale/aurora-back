/* eslint-disable key-spacing */
import { IamAccount } from '@app/iam/account';
import { SupportComment } from '@app/support/comment';
import {
    SupportCreatedIssueEvent,
    SupportDeletedIssueEvent,
    SupportUpdatedIssueEvent,
} from '@app/support/issue';
import {
    SupportIssueAccountId,
    SupportIssueAccountUsername,
    SupportIssueAttachments,
    SupportIssueBackVersion,
    SupportIssueCreatedAt,
    SupportIssueDeletedAt,
    SupportIssueDescription,
    SupportIssueDisplayName,
    SupportIssueEnvironment,
    SupportIssueExternalId,
    SupportIssueExternalStatus,
    SupportIssueFrontVersion,
    SupportIssueId,
    SupportIssueMeta,
    SupportIssueRowId,
    SupportIssueScreenRecording,
    SupportIssueSubject,
    SupportIssueUpdatedAt,
} from '@app/support/issue/domain/value-objects';
import { CQMetadata, LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class SupportIssue extends AggregateRoot {
    id: SupportIssueId;
    rowId: SupportIssueRowId;
    externalId: SupportIssueExternalId;
    externalStatus: SupportIssueExternalStatus;
    accountId: SupportIssueAccountId;
    accountUsername: SupportIssueAccountUsername;
    displayName: SupportIssueDisplayName;
    frontVersion: SupportIssueFrontVersion;
    backVersion: SupportIssueBackVersion;
    environment: SupportIssueEnvironment;
    subject: SupportIssueSubject;
    description: SupportIssueDescription;
    attachments: SupportIssueAttachments;
    screenRecording: SupportIssueScreenRecording;
    meta: SupportIssueMeta;
    createdAt: SupportIssueCreatedAt;
    updatedAt: SupportIssueUpdatedAt;
    deletedAt: SupportIssueDeletedAt;
    account: IamAccount;
    comments: SupportComment[];

    constructor(
        id: SupportIssueId,
        rowId: SupportIssueRowId,
        externalId: SupportIssueExternalId,
        externalStatus: SupportIssueExternalStatus,
        accountId: SupportIssueAccountId,
        accountUsername: SupportIssueAccountUsername,
        displayName: SupportIssueDisplayName,
        frontVersion: SupportIssueFrontVersion,
        backVersion: SupportIssueBackVersion,
        environment: SupportIssueEnvironment,
        subject: SupportIssueSubject,
        description: SupportIssueDescription,
        attachments: SupportIssueAttachments,
        screenRecording: SupportIssueScreenRecording,
        meta: SupportIssueMeta,
        createdAt: SupportIssueCreatedAt,
        updatedAt: SupportIssueUpdatedAt,
        deletedAt: SupportIssueDeletedAt,
        account?: IamAccount,
        comments?: SupportComment[],
    ) {
        super();
        this.id = id;
        this.rowId = rowId;
        this.externalId = externalId;
        this.externalStatus = externalStatus;
        this.accountId = accountId;
        this.accountUsername = accountUsername;
        this.displayName = displayName;
        this.frontVersion = frontVersion;
        this.backVersion = backVersion;
        this.environment = environment;
        this.subject = subject;
        this.description = description;
        this.attachments = attachments;
        this.screenRecording = screenRecording;
        this.meta = meta;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.account = account;
        this.comments = comments;
    }

    static register(
        id: SupportIssueId,
        rowId: SupportIssueRowId,
        externalId: SupportIssueExternalId,
        externalStatus: SupportIssueExternalStatus,
        accountId: SupportIssueAccountId,
        accountUsername: SupportIssueAccountUsername,
        displayName: SupportIssueDisplayName,
        frontVersion: SupportIssueFrontVersion,
        backVersion: SupportIssueBackVersion,
        environment: SupportIssueEnvironment,
        subject: SupportIssueSubject,
        description: SupportIssueDescription,
        attachments: SupportIssueAttachments,
        screenRecording: SupportIssueScreenRecording,
        meta: SupportIssueMeta,
        createdAt: SupportIssueCreatedAt,
        updatedAt: SupportIssueUpdatedAt,
        deletedAt: SupportIssueDeletedAt,
        account?: IamAccount,
        comments?: SupportComment[],
    ): SupportIssue {
        return new SupportIssue(
            id,
            rowId,
            externalId,
            externalStatus,
            accountId,
            accountUsername,
            displayName,
            frontVersion,
            backVersion,
            environment,
            subject,
            description,
            attachments,
            screenRecording,
            meta,
            createdAt,
            updatedAt,
            deletedAt,
            account,
            comments,
        );
    }

    created(event: { payload: SupportIssue; cQMetadata?: CQMetadata }): void {
        this.apply(
            new SupportCreatedIssueEvent({
                payload: {
                    id: event.payload.id.value,
                    externalId: event.payload.externalId?.value,
                    externalStatus: event.payload.externalStatus?.value,
                    accountId: event.payload.accountId?.value,
                    accountUsername: event.payload.accountUsername?.value,
                    displayName: event.payload.displayName?.value,
                    frontVersion: event.payload.frontVersion?.value,
                    backVersion: event.payload.backVersion?.value,
                    environment: event.payload.environment?.value,
                    subject: event.payload.subject.value,
                    description: event.payload.description.value,
                    attachments: event.payload.attachments?.value,
                    screenRecording: event.payload.screenRecording?.value,
                    meta: event.payload.meta?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    updated(event: { payload: SupportIssue; cQMetadata?: CQMetadata }): void {
        this.apply(
            new SupportUpdatedIssueEvent({
                payload: {
                    id: event.payload.id?.value,
                    externalId: event.payload.externalId?.value,
                    externalStatus: event.payload.externalStatus?.value,
                    accountId: event.payload.accountId?.value,
                    accountUsername: event.payload.accountUsername?.value,
                    displayName: event.payload.displayName?.value,
                    frontVersion: event.payload.frontVersion?.value,
                    backVersion: event.payload.backVersion?.value,
                    environment: event.payload.environment?.value,
                    subject: event.payload.subject?.value,
                    description: event.payload.description?.value,
                    attachments: event.payload.attachments?.value,
                    screenRecording: event.payload.screenRecording?.value,
                    meta: event.payload.meta?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    deleted(event: { payload: SupportIssue; cQMetadata?: CQMetadata }): void {
        this.apply(
            new SupportDeletedIssueEvent({
                payload: {
                    id: event.payload.id.value,
                    rowId: event.payload.rowId.value,
                    externalId: event.payload.externalId?.value,
                    externalStatus: event.payload.externalStatus?.value,
                    accountId: event.payload.accountId?.value,
                    accountUsername: event.payload.accountUsername?.value,
                    displayName: event.payload.displayName?.value,
                    frontVersion: event.payload.frontVersion?.value,
                    backVersion: event.payload.backVersion?.value,
                    environment: event.payload.environment?.value,
                    subject: event.payload.subject.value,
                    description: event.payload.description.value,
                    attachments: event.payload.attachments?.value,
                    screenRecording: event.payload.screenRecording?.value,
                    meta: event.payload.meta?.value,
                    createdAt: event.payload.createdAt?.value,
                    updatedAt: event.payload.updatedAt?.value,
                    deletedAt: event.payload.deletedAt?.value,
                },
                cQMetadata: event.cQMetadata,
            }),
        );
    }

    toDTO(): LiteralObject {
        return {
            id: this.id.value,
            rowId: this.rowId.value,
            externalId: this.externalId?.value,
            externalStatus: this.externalStatus?.value,
            accountId: this.accountId?.value,
            accountUsername: this.accountUsername?.value,
            displayName: this.displayName?.value,
            frontVersion: this.frontVersion?.value,
            backVersion: this.backVersion?.value,
            environment: this.environment?.value,
            subject: this.subject.value,
            description: this.description.value,
            attachments: this.attachments?.value,
            screenRecording: this.screenRecording?.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            account: this.account?.toDTO(),
            comments: this.comments?.map((item) => item.toDTO()),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject {
        return {
            id: this.id.value,
            externalId: this.externalId?.value,
            externalStatus: this.externalStatus?.value,
            accountId: this.accountId?.value,
            accountUsername: this.accountUsername?.value,
            displayName: this.displayName?.value,
            frontVersion: this.frontVersion?.value,
            backVersion: this.backVersion?.value,
            environment: this.environment?.value,
            subject: this.subject.value,
            description: this.description.value,
            attachments: this.attachments?.value,
            screenRecording: this.screenRecording?.value,
            meta: this.meta?.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,
            account: this.account?.toDTO(),
            comments: this.comments?.map((item) => item.toDTO()),
        };
    }
}
