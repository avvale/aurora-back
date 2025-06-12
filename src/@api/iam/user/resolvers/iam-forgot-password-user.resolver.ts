import { IamUpdateUserByIdInput } from '@api/graphql';
import { IamForgotPasswordUserHandler } from '@api/iam/user';
import { Auth } from '@aurora/decorators';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@Auth('iam.user.update')
export class IamForgotPasswordUserResolver
{
    constructor(
        private readonly handler: IamForgotPasswordUserHandler,
    ) {}

    @Mutation('iamForgotPasswordUser')
    async main(
        @Args('payload') payload: IamUpdateUserByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
        @Auditing() auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
            auditing,
        );
    }
}
