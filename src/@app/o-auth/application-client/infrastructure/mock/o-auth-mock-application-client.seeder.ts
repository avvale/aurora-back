import { Injectable } from '@nestjs/common';
import { MockSeeder } from '@aurorajs.dev/core';
import {
    OAuthApplicationClientApplicationId,
    OAuthApplicationClientClientId,
} from '../../domain/value-objects';
import { OAuthApplicationClient } from '../../domain/o-auth-application-client.aggregate';
import { oAuthMockApplicationClientData } from './o-auth-mock-application-client.data';
import * as _ from 'lodash';

@Injectable()
export class OAuthMockApplicationClientSeeder extends MockSeeder<OAuthApplicationClient>
{
    public collectionSource: OAuthApplicationClient[];

    constructor()
    {
        super();
        this._createMock();
    }

    private _createMock(): void
    {
        this.collectionSource = [];

        for (const applicationClient of _.orderBy(oAuthMockApplicationClientData, ['id']))
        {
            this.collectionSource.push(
                OAuthApplicationClient.register(
                    new OAuthApplicationClientApplicationId(applicationClient.applicationId),
                    new OAuthApplicationClientClientId(applicationClient.clientId),
                ),
            );
        }
    }
}
