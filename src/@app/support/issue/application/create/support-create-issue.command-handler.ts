/* eslint-disable key-spacing */
import { SupportCreateIssueCommand } from '@app/support/issue';
import { SupportCreateIssueService } from '@app/support/issue/application/create/support-create-issue.service';
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
    SupportIssueSubject,
    SupportIssueVideo,
} from '@app/support/issue/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(SupportCreateIssueCommand)
export class SupportCreateIssueCommandHandler
    implements ICommandHandler<SupportCreateIssueCommand>
{
    constructor(
        private readonly createIssueService: SupportCreateIssueService,
    ) {}

    async execute(command: SupportCreateIssueCommand): Promise<void> {
        // call to use case and implements ValueObjects
        await this.createIssueService.main(
            {
                id: new SupportIssueId(command.payload.id),
                externalId: new SupportIssueExternalId(
                    command.payload.externalId,
                ),
                externalStatus: new SupportIssueExternalStatus(
                    command.payload.externalStatus,
                ),
                accountId: new SupportIssueAccountId(command.payload.accountId),
                accountUsername: new SupportIssueAccountUsername(
                    command.payload.accountUsername,
                ),
                frontVersion: new SupportIssueFrontVersion(
                    command.payload.frontVersion,
                ),
                backVersion: new SupportIssueBackVersion(
                    command.payload.backVersion,
                ),
                environment: new SupportIssueEnvironment(
                    command.payload.environment,
                ),
                subject: new SupportIssueSubject(command.payload.subject),
                description: new SupportIssueDescription(
                    command.payload.description,
                ),
                attachments: new SupportIssueAttachments(
                    command.payload.attachments,
                ),
                video: new SupportIssueVideo(command.payload.video),
                meta: new SupportIssueMeta(command.payload.meta),
            },
            command.cQMetadata,
        );
    }
}
