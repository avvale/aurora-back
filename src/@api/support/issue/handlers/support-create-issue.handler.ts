import { SupportCreateIssueInput, SupportIssue } from '@api/graphql';
import { SupportCreateIssueDto, SupportIssueDto } from '@api/support/issue';
import { ClickUpService } from '@api/support/shared';
import { SupportCreateIssueCommand, SupportFindIssueByIdQuery } from '@app/support/issue';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SupportCreateIssueHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
        private readonly clickUpService: ClickUpService,
    ) {}

    async main(
        payload: SupportCreateIssueInput | SupportCreateIssueDto,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<SupportIssue | SupportIssueDto>
    {
        await this.commandBus.dispatch(new SupportCreateIssueCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));

        try
        {
           /*  const res = await lastValueFrom(
                this.clickUpService
                    .getFolders('90151058759'),
            );

            console.log('ClickUp folders response:', res.data); */

            await lastValueFrom(
                this.clickUpService
                    .createTask(
                        '901516935164',
                        {
                            name       : payload.subject,
                            description: payload.description,
                        },
                    ),
            );
        }
        catch (error)
        {
            console.error('Error creating ClickUp task:', error);
        }

        return await this.queryBus.ask(new SupportFindIssueByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}
