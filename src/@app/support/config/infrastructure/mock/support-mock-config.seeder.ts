import { SupportConfig, supportMockConfigData } from '@app/support/config';
import {
    SupportConfigApiKey,
    SupportConfigCreatedAt,
    SupportConfigDeletedAt,
    SupportConfigId,
    SupportConfigListId,
    SupportConfigRowId,
    SupportConfigUpdatedAt,
} from '@app/support/config/domain/value-objects';
import { MockSeeder } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';
import * as _ from 'lodash';

@Injectable()
export class SupportMockConfigSeeder extends MockSeeder<SupportConfig> {
    public collectionSource: SupportConfig[];

    constructor() {
        super();
        this._createMock();
    }

    private _createMock(): void {
        this.collectionSource = [];

        for (const config of _.orderBy(supportMockConfigData, ['id'])) {
            this.collectionSource.push(
                SupportConfig.register(
                    new SupportConfigId(config.id),
                    new SupportConfigRowId(config.rowId),
                    new SupportConfigApiKey(config.apiKey),
                    new SupportConfigListId(config.listId),
                    new SupportConfigCreatedAt({ currentTimestamp: true }),
                    new SupportConfigUpdatedAt({ currentTimestamp: true }),
                    new SupportConfigDeletedAt(null),
                ),
            );
        }
    }
}
