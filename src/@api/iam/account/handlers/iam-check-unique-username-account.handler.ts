import { IamFindAccountQuery } from '@app/iam/account';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class IamCheckUniqueUsernameAccountHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        username: string,
    ): Promise<boolean>
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
}