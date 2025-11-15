import {
    SupportConfig,
    SupportIConfigRepository,
    supportMockConfigData,
} from '@app/support/config';
import {
    SupportConfigApiKey,
    SupportConfigCreatedAt,
    SupportConfigDeletedAt,
    SupportConfigId,
    SupportConfigListId,
    SupportConfigRowId,
    SupportConfigUpdatedAt,
} from '@app/support/config/domain/value-objects';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SupportMockConfigRepository
    extends MockRepository<SupportConfig>
    implements SupportIConfigRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'SupportConfig';
    public collectionSource: SupportConfig[];

    constructor() {
        super();
        this.createSourceMockData();
    }

    public reset(): void {
        this.createSourceMockData();
    }

    private createSourceMockData(): void {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>supportMockConfigData) {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(
                SupportConfig.register(
                    new SupportConfigId(itemCollection.id),
                    new SupportConfigRowId(itemCollection.rowId),
                    new SupportConfigApiKey(itemCollection.apiKey),
                    new SupportConfigListId(itemCollection.listId),
                    new SupportConfigCreatedAt(itemCollection.createdAt),
                    new SupportConfigUpdatedAt(itemCollection.updatedAt),
                    new SupportConfigDeletedAt(itemCollection.deletedAt),
                ),
            );
        }
    }
}
