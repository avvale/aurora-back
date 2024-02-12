import { MessageUpdateInboxByIdDto } from '../dto';
import { MessageUpdateInboxByIdInput } from '@api/graphql';
import { IamAccountResponse } from '@app/iam/account';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessageReadCustomerMessageInboxHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        account: IamAccountResponse,
        payload: MessageUpdateInboxByIdInput | MessageUpdateInboxByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
        auditing?: AuditingMeta,
    ): Promise<boolean>
    {
        // coding here
        /* await this.commandBus.dispatch(new YourCommand(
            payload,
            {
                timezone,
                repositoryOptions: {
                    auditing,
                },
            },
        ));
        await this.queryBus.ask(new YourQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        )); */

        return true;
    }
}