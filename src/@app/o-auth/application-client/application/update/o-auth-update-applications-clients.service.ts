import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import {
    OAuthApplicationClientApplicationId,
    OAuthApplicationClientClientId,
} from '../../domain/value-objects';
import { OAuthIApplicationClientRepository } from '../../domain/o-auth-application-client.repository';
import { OAuthApplicationClient } from '../../domain/o-auth-application-client.aggregate';
import { OAuthAddApplicationsClientsContextEvent } from '../events/o-auth-add-applications-clients-context.event';

@Injectable()
export class OAuthUpdateApplicationsClientsService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: OAuthIApplicationClientRepository,
    ) {}

    async main(
        payload: {
            applicationId?: OAuthApplicationClientApplicationId;
            clientId?: OAuthApplicationClientClientId;
        },
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const applicationClient = OAuthApplicationClient.register(
            payload.applicationId,
            payload.clientId,
        );


        // update
        await this.repository.update(
            applicationClient,
            {
                queryStatement,
                constraint,
                cQMetadata,
                updateOptions: cQMetadata?.repositoryOptions,
            },
        );

        // get objects to delete
        const applicationsClients = await this.repository.get(
            {
                queryStatement,
                constraint,
                cQMetadata,
            },
        );

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const applicationsClientsRegister = this.publisher.mergeObjectContext(
            new OAuthAddApplicationsClientsContextEvent(applicationsClients),
        );

        applicationsClientsRegister.updated(); // apply event to model events
        applicationsClientsRegister.commit(); // commit all events of model
    }
}
