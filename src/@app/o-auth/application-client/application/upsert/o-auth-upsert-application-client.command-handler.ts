/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OAuthUpsertApplicationClientCommand } from './o-auth-upsert-application-client.command';
import { OAuthUpsertApplicationClientService } from './o-auth-upsert-application-client.service';
import {
    OAuthApplicationClientApplicationId,
    OAuthApplicationClientClientId,
} from '../../domain/value-objects';

@CommandHandler(OAuthUpsertApplicationClientCommand)
export class OAuthUpsertApplicationClientCommandHandler implements ICommandHandler<OAuthUpsertApplicationClientCommand>
{
    constructor(
        private readonly upsertApplicationClientService: OAuthUpsertApplicationClientService,
    ) {}

    async execute(command: OAuthUpsertApplicationClientCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.upsertApplicationClientService.main(
            {
                applicationId: new OAuthApplicationClientApplicationId(command.payload.applicationId),
                clientId: new OAuthApplicationClientClientId(command.payload.clientId),
            },
            command.cQMetadata,
        );
    }
}
