import { OAuthCreateApplicationClientInput } from '@api/graphql';
import { OAuthCreateApplicationClientDto } from '@api/o-auth/application-client';
import { OAuthCreateApplicationsClientsCommand } from '@app/o-auth/application-client';
import { ICommandBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OAuthCreateApplicationsClientsHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: OAuthCreateApplicationClientInput[] | OAuthCreateApplicationClientDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new OAuthCreateApplicationsClientsCommand(
            payload,
            {
                timezone,
            },
        ));

        return true;
    }
}
