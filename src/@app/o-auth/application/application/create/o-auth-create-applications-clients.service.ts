import { OAuthApplicationClient, OAuthIApplicationClientRepository } from '@app/o-auth/application';
import {
    OAuthApplicationApplicationApplicationId,
    OAuthApplicationApplicationClientId,
} from '@app/o-auth/application/domain/value-objects';
import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';

@Injectable()
export class OAuthCreateApplicationsClientsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: OAuthIApplicationClientRepository,
    ) {}

    public async main(
        applicationsClients: {
            applicationId: OAuthApplicationApplicationApplicationId;
            clientId: OAuthApplicationApplicationClientId;

        } [],
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateApplicationsClients = applicationsClients.map(applicationClient => OAuthApplicationClient.register(
            applicationClient.applicationId,
            applicationClient.clientId,
        ));

        // insert
        await this.repository.insert(aggregateApplicationsClients);
    }
}