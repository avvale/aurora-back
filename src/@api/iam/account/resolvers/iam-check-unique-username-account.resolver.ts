import { IamCheckUniqueUsernameAccountHandler } from '@api/iam/account';
import { AuthenticationJwtGuard } from '@api/o-auth/shared';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@UseGuards(AuthenticationJwtGuard)
export class IamCheckUniqueUsernameAccountResolver
{
    constructor(
        private readonly handler: IamCheckUniqueUsernameAccountHandler,
    ) {}

    @Mutation('iamCheckUniqueUsernameAccount')
    async main(
        @Args('username') username?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            username,
        );
    }
}
