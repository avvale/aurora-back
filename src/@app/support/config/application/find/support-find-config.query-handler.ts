import {
    SupportConfigMapper,
    SupportConfigResponse,
    SupportFindConfigQuery,
} from '@app/support/config';
import { SupportFindConfigService } from '@app/support/config/application/find/support-find-config.service';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SupportFindConfigQuery)
export class SupportFindConfigQueryHandler
    implements IQueryHandler<SupportFindConfigQuery>
{
    private readonly mapper: SupportConfigMapper = new SupportConfigMapper();

    constructor(private readonly findConfigService: SupportFindConfigService) {}

    async execute(
        query: SupportFindConfigQuery,
    ): Promise<SupportConfigResponse> {
        const config = await this.findConfigService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(config);
    }
}
