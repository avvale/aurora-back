import { SupportCreateIssueInput, SupportIssue } from '@api/graphql';
import { SupportCreateIssueHandler } from '@api/support/issue';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('support.issue.create')
export class SupportCreateIssueResolver
{
    constructor(
        private readonly handler: SupportCreateIssueHandler,
    ) {}

    @Mutation('supportCreateIssue')
    async main(
        @Args('payload') payload: SupportCreateIssueInput,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<SupportIssue>
    {
        return await this.handler.main(
            payload,
            timezone,
            auditing,
        );
    }
}
