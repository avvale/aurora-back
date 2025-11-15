import {
    SupportConfig,
    SupportConfigMapper,
    SupportConfigResponse,
    SupportGetConfigsQuery,
} from '@app/support/config';
import { SupportGetConfigsService } from '@app/support/config/application/get/support-get-configs.service';
import { LiteralObject } from '@aurorajs.dev/core';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SupportGetConfigsQuery)
export class SupportGetConfigsQueryHandler
    implements IQueryHandler<SupportGetConfigsQuery>
{
    private readonly mapper: SupportConfigMapper = new SupportConfigMapper();

    constructor(private readonly getConfigsService: SupportGetConfigsService) {}

    async execute(
        query: SupportGetConfigsQuery,
    ): Promise<SupportConfigResponse[] | LiteralObject[]> {
        const models = await this.getConfigsService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        if (query.cQMetadata?.excludeMapModelToAggregate) return models;

        return this.mapper.mapAggregatesToResponses(models as SupportConfig[]);
    }
}
