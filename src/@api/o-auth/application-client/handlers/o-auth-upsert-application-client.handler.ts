import { OAuthApplicationClient, OAuthUpdateApplicationClientByIdInput } from '@api/graphql';
import { OAuthApplicationClientDto, OAuthUpdateApplicationClientByIdDto } from '@api/o-auth/application-client';
import { OAuthFindApplicationClientByIdQuery, OAuthUpsertApplicationClientCommand } from '@app/o-auth/application-client';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class OAuthUpsertApplicationClientHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: OAuthUpdateApplicationClientByIdInput | OAuthUpdateApplicationClientByIdDto,
        timezone?: string,
    ): Promise<OAuthApplicationClient | OAuthApplicationClientDto>
    {
        await this.commandBus.dispatch(new OAuthUpsertApplicationClientCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new OAuthFindApplicationClientByIdQuery(
            payload.applicationId,
            payload.clientId,
            {},
            {
                timezone,
            },
        ));
    }
}
