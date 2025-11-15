import { SupportConfig, SupportConfigResponse } from '@app/support/config';
import {
    SupportConfigApiKey,
    SupportConfigCreatedAt,
    SupportConfigDeletedAt,
    SupportConfigId,
    SupportConfigListId,
    SupportConfigRowId,
    SupportConfigUpdatedAt,
} from '@app/support/config/domain/value-objects';
import {
    CQMetadata,
    IMapper,
    LiteralObject,
    MapperOptions,
} from '@aurorajs.dev/core';

export class SupportConfigMapper implements IMapper {
    constructor(public options: MapperOptions = { eagerLoading: true }) {}

    /**
     * Map object to aggregate
     * @param config
     */
    mapModelToAggregate(
        config: LiteralObject,
        cQMetadata?: CQMetadata,
    ): SupportConfig {
        if (!config) return;

        return this.makeAggregate(config, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param configs
     */
    mapModelsToAggregates(
        configs: LiteralObject[],
        cQMetadata?: CQMetadata,
    ): SupportConfig[] {
        if (!Array.isArray(configs)) return;

        return configs.map((config) => this.makeAggregate(config, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param config
     */
    mapAggregateToResponse(config: SupportConfig): SupportConfigResponse {
        return this.makeResponse(config);
    }

    /**
     * Map array of aggregates to array responses
     * @param configs
     */
    mapAggregatesToResponses(
        configs: SupportConfig[],
    ): SupportConfigResponse[] {
        if (!Array.isArray(configs)) return;

        return configs.map((config) => this.makeResponse(config));
    }

    private makeAggregate(
        config: LiteralObject,
        cQMetadata?: CQMetadata,
    ): SupportConfig {
        return SupportConfig.register(
            new SupportConfigId(config.id, { undefinable: true }),
            new SupportConfigRowId(config.rowId, { undefinable: true }),
            new SupportConfigApiKey(config.apiKey, { undefinable: true }),
            new SupportConfigListId(config.listId, { undefinable: true }),
            new SupportConfigCreatedAt(
                config.createdAt,
                { undefinable: true },
                { addTimezone: cQMetadata?.timezone },
            ),
            new SupportConfigUpdatedAt(
                config.updatedAt,
                { undefinable: true },
                { addTimezone: cQMetadata?.timezone },
            ),
            new SupportConfigDeletedAt(
                config.deletedAt,
                { undefinable: true },
                { addTimezone: cQMetadata?.timezone },
            ),
        );
    }

    private makeResponse(config: SupportConfig): SupportConfigResponse {
        if (!config) return;

        return new SupportConfigResponse(
            config.id.value,
            config.rowId.value,
            config.apiKey.value,
            config.listId.value,
            config.createdAt.value,
            config.updatedAt.value,
            config.deletedAt.value,
        );
    }
}
