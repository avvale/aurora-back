import { IamCheckPasswordMeAccountHandler } from '@api/iam/account';
import { AuthenticationJwtGuard } from '@api/o-auth/shared';
import { IamAccountResponse } from '@app/iam/account';
import { CurrentAccount } from '@aurorajs.dev/core';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

@Resolver()
@UseGuards(AuthenticationJwtGuard)
export class IamCheckPasswordMeAccountResolver
{
    constructor(
        private readonly handler: IamCheckPasswordMeAccountHandler,
    ) {}

    @Mutation('iamCheckPasswordMeAccount')
    async main(
        @CurrentAccount() account: IamAccountResponse,
        @Args('password') password: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            account,
            password,
        );
    }
}
