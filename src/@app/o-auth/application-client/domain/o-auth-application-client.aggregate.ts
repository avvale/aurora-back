/* eslint-disable key-spacing */
import { AggregateRoot } from '@nestjs/cqrs';
import { LiteralObject, Utils } from '@aurorajs.dev/core';
import {
    OAuthApplicationClientApplicationId,
    OAuthApplicationClientClientId,
} from './value-objects';
import { OAuthCreatedApplicationClientEvent } from '../application/events/o-auth-created-application-client.event';
import { OAuthUpdatedApplicationClientEvent } from '../application/events/o-auth-updated-application-client.event';
import { OAuthDeletedApplicationClientEvent } from '../application/events/o-auth-deleted-application-client.event';

export class OAuthApplicationClient extends AggregateRoot
{
    applicationId: OAuthApplicationClientApplicationId;
    clientId: OAuthApplicationClientClientId;

    // eager relationship

    constructor(
        applicationId: OAuthApplicationClientApplicationId,
        clientId: OAuthApplicationClientClientId,

    )
    {
        super();
        this.applicationId = applicationId;
        this.clientId = clientId;

        // eager relationship
    }

    static register(
        applicationId: OAuthApplicationClientApplicationId,
        clientId: OAuthApplicationClientClientId,

    ): OAuthApplicationClient
    {
        return new OAuthApplicationClient(
            applicationId,
            clientId,

        );
    }

    created(applicationClient: OAuthApplicationClient): void
    {
        this.apply(
            new OAuthCreatedApplicationClientEvent(
                applicationClient.applicationId.value,
                applicationClient.clientId.value,
            ),
        );
    }

    updated(applicationClient: OAuthApplicationClient): void
    {
        this.apply(
            new OAuthUpdatedApplicationClientEvent(
                applicationClient.applicationId?.value,
                applicationClient.clientId?.value,
            ),
        );
    }

    deleted(applicationClient: OAuthApplicationClient): void
    {
        this.apply(
            new OAuthDeletedApplicationClientEvent(
                applicationClient.applicationId.value,
                applicationClient.clientId.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            applicationId: this.applicationId.value,
            clientId: this.clientId.value,

            // eager relationship
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            applicationId: this.applicationId.value,
            clientId: this.clientId.value,

            // eager relationship
        };
    }
}
