import { SupportCreateIssueInput, SupportIssue } from '@api/graphql';
import { StorageAccountFileManagerService } from '@api/storage-account/file-manager';
import {
    CLICKUP_TASK_PLATFORM_API_KEY,
    CLICKUP_TASK_PLATFORM_LIST_ID,
    ClickupService,
} from '@api/support/clickup/shared';
import { SupportCreateIssueDto, SupportIssueDto } from '@api/support/issue';
import {
    SupportCreateIssueCommand,
    SupportFindIssueByIdQuery,
    SupportUpdateIssueByIdCommand,
} from '@app/support/issue';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SupportCreateIssueHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly storageAccountFileManagerService: StorageAccountFileManagerService,
        private readonly clickupService: ClickupService,
        @Inject(CACHE_MANAGER) private readonly cacheManager: Cache,
    ) {}

    async main(
        payload: SupportCreateIssueInput | SupportCreateIssueDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportIssue | SupportIssueDto> {
        await this.commandBus.dispatch(
            new SupportCreateIssueCommand(payload, {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            }),
        );

        if (payload.screenRecording) {
            void this.storageAccountFileManagerService
                .uploadFile({
                    ...payload.screenRecording,
                    name: payload.screenRecording.file.name,
                })
                .then(
                    (screenRecordingUploaded) =>
                        void this.commandBus.dispatch(
                            new SupportUpdateIssueByIdCommand({
                                id: payload.id,
                                screenRecording: screenRecordingUploaded,
                            }),
                        ),
                );
        }

        try {
            const clickupTaskPlatformApiKey =
                await this.cacheManager.get<string>(
                    CLICKUP_TASK_PLATFORM_API_KEY,
                );

            const clickupTaskPlatformListId =
                await this.cacheManager.get<string>(
                    CLICKUP_TASK_PLATFORM_LIST_ID,
                );

            void lastValueFrom(
                this.clickupService.createTask(
                    clickupTaskPlatformListId,
                    {
                        name: payload.subject,
                        description: payload.description,
                    },
                    { authorization: clickupTaskPlatformApiKey },
                ),
            );
        } catch (error) {
            console.error('Error creating ClickUp task:', error);
        }

        return await this.queryBus.ask(
            new SupportFindIssueByIdQuery(
                payload.id,
                {},
                {
                    timezone,
                },
            ),
        );
    }
}
