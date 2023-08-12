/* eslint-disable key-spacing */
import {
    OAuthApplicationApplicationApplicationId,
    OAuthApplicationApplicationClientId,
} from '@app/o-auth/application/domain/value-objects';
import { LiteralObject } from '@aurorajs.dev/core';
import { AggregateRoot } from '@nestjs/cqrs';

export class OAuthApplicationClient extends AggregateRoot
{
    applicationId: OAuthApplicationApplicationApplicationId;
    clientId: OAuthApplicationApplicationClientId;

    constructor(applicationId?: OAuthApplicationApplicationApplicationId, clientId?: OAuthApplicationApplicationClientId)
    {
        super();

        this.applicationId = applicationId;
        this.clientId = clientId;
    }

    static register (applicationId: OAuthApplicationApplicationApplicationId, clientId: OAuthApplicationApplicationClientId): OAuthApplicationClient
    {
        return new OAuthApplicationClient(applicationId, clientId);
    }

    toDTO(): LiteralObject
    {
        return {
            applicationId: this.applicationId.value,
            clientId: this.clientId.value,
        };
    }

    toRepository(): LiteralObject
    {
        return {
            applicationId: this.applicationId.value,
            clientId: this.clientId.value,
        };
    }
}
