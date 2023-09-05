import { IMapper, LiteralObject, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { OAuthApplicationClient } from './o-auth-application-client.aggregate';
import { OAuthApplicationClientResponse } from './o-auth-application-client.response';
import {
    OAuthApplicationClientApplicationId,
    OAuthApplicationClientClientId,
} from './value-objects';

export class OAuthApplicationClientMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param applicationClient
     */
    mapModelToAggregate(applicationClient: LiteralObject, cQMetadata?: CQMetadata): OAuthApplicationClient
    {
        if (!applicationClient) return;

        return this.makeAggregate(applicationClient, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param applicationsClients
     */
    mapModelsToAggregates(applicationsClients: LiteralObject[], cQMetadata?: CQMetadata): OAuthApplicationClient[]
    {
        if (!Array.isArray(applicationsClients)) return;

        return applicationsClients.map(applicationClient => this.makeAggregate(applicationClient, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param applicationClient
     */
    mapAggregateToResponse(applicationClient: OAuthApplicationClient): OAuthApplicationClientResponse
    {
        return this.makeResponse(applicationClient);
    }

    /**
     * Map array of aggregates to array responses
     * @param applicationsClients
     */
    mapAggregatesToResponses(applicationsClients: OAuthApplicationClient[]): OAuthApplicationClientResponse[]
    {
        if (!Array.isArray(applicationsClients)) return;

        return applicationsClients.map(applicationClient => this.makeResponse(applicationClient));
    }

    private makeAggregate(applicationClient: LiteralObject, cQMetadata?: CQMetadata): OAuthApplicationClient
    {
        return OAuthApplicationClient.register(
            new OAuthApplicationClientApplicationId(applicationClient.applicationId, { undefinable: true }),
            new OAuthApplicationClientClientId(applicationClient.clientId, { undefinable: true }),
        );
    }

    private makeResponse(applicationClient: OAuthApplicationClient): OAuthApplicationClientResponse
    {
        if (!applicationClient) return;

        return new OAuthApplicationClientResponse(
            applicationClient.applicationId.value,
            applicationClient.clientId.value,
        );
    }
}
