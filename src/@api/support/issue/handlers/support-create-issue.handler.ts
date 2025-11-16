import { SupportCreateIssueInput, SupportIssue } from '@api/graphql';
import {
    CLICKUP_TASK_PLATFORM_API_KEY,
    CLICKUP_TASK_PLATFORM_LIST_ID,
    ClickupService,
} from '@api/support/clickup/shared';
import { SupportCreateIssueDto, SupportIssueDto } from '@api/support/issue';
import {
    SupportCreateIssueCommand,
    SupportFindIssueByIdQuery,
} from '@app/support/issue';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';

@Injectable()
export class SupportCreateIssueHandler {
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
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

        try {
            const clickupTaskPlatformApiKey =
                await this.cacheManager.get<string>(
                    CLICKUP_TASK_PLATFORM_API_KEY,
                );

            const clickupTaskPlatformListId =
                await this.cacheManager.get<string>(
                    CLICKUP_TASK_PLATFORM_LIST_ID,
                );
            /*  const res = await lastValueFrom(
                this.clickupService.getFolders('90154074844', {
                    authorization:
                        'pk_6857068_25VQHBFU16YYHZ5OBYITIRYQPV46GSTZ',
                }),
            );

            console.log('ClickUp folders response:', res); */

            /* await lastValueFrom(
                this.clickupService.createTask(
                    '901516935164',
                    {
                        name: payload.subject,
                        description: payload.description,
                    },
                    { authorization: supportTaskPlatformApiKey },
                ),
            ); */
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
