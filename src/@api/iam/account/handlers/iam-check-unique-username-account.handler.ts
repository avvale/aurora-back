import { IamFindAccountQuery } from '@app/iam/account';
import { IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IamCheckUniqueUsernameAccountHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        username: string,
    ): Promise<boolean>
    {
        try
        {
            const account = await this.queryBus.ask(new IamFindAccountQuery(
                {
                    where: {
                        username,
                    },
                },
            ));

            return !account;
        }
        catch (error)
        {
            if (error.status === 404) return true;
        }
    }
}