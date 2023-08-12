import { OAuthCreateApplicationsClientsCommand } from './o-auth-create-applications-clients.command';
import { OAuthCreateApplicationsClientsService } from './o-auth-create-applications-clients.service';
import {
    OAuthApplicationApplicationApplicationId,
    OAuthApplicationApplicationClientId,
} from '@app/o-auth/application/domain/value-objects';
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

@CommandHandler(OAuthCreateApplicationsClientsCommand)
export class OAuthCreateApplicationsClientsCommandHandler implements ICommandHandler<OAuthCreateApplicationsClientsCommand>
{
    constructor(
        private readonly createApplicationsClientsService: OAuthCreateApplicationsClientsService,
    ) { }

    async execute(command: OAuthCreateApplicationsClientsCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createApplicationsClientsService.main(
            command.applicationsClients
                .map(data =>
                {
                    return {
                        applicationId: new OAuthApplicationApplicationApplicationId(data.applicationId),
                        clientId: new OAuthApplicationApplicationClientId(data.clientId),
                    };
                }),
        );
    }
}