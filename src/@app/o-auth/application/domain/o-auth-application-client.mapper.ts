/* eslint-disable no-unused-vars */
import { OAuthApplicationClient } from '@app/o-auth/application';
import {
    OAuthApplicationApplicationApplicationId,
    OAuthApplicationApplicationClientId,
} from '@app/o-auth/application/domain/value-objects';
import { IMapper, LiteralObject, MapperOptions } from '@aurorajs.dev/core';

export class OAuthApplicationClientMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param applicationClient
     */
    mapModelToAggregate(applicationClient: LiteralObject): OAuthApplicationClient
    {
        if (!applicationClient) return;

        return this.makeAggregate(applicationClient);
    }

    /**
     * Map array of objects to array aggregates
     * @param applicationsClients
     */
    mapModelsToAggregates(applicationsClients: LiteralObject[]): OAuthApplicationClient[]
    {
        if (!Array.isArray(applicationsClients)) return;

        return applicationsClients.map(applicationClient  => this.makeAggregate(applicationClient));
    }

    mapAggregateToResponse(applicationClient: OAuthApplicationClient): LiteralObject
    {
        return null;
    }

    mapAggregatesToResponses(applicationClient: OAuthApplicationClient[]): LiteralObject[]
    {
        return null;
    }

    private makeAggregate(applicationClient: LiteralObject): OAuthApplicationClient
    {
        return OAuthApplicationClient.register(
            new OAuthApplicationApplicationApplicationId(applicationClient.applicationId),
            new OAuthApplicationApplicationClientId(applicationClient.accountId),
        );
    }
}