import {
    SupportConfigMapper,
    SupportConfigResponse,
    SupportFindConfigByIdQuery,
} from '@app/support/config';
import { SupportFindConfigByIdService } from '@app/support/config/application/find/support-find-config-by-id.service';
import { SupportConfigId } from '@app/support/config/domain/value-objects';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

@QueryHandler(SupportFindConfigByIdQuery)
export class SupportFindConfigByIdQueryHandler
    implements IQueryHandler<SupportFindConfigByIdQuery>
{
    private readonly mapper: SupportConfigMapper = new SupportConfigMapper();

    constructor(
        private readonly findConfigByIdService: SupportFindConfigByIdService,
    ) {}

    async execute(
        query: SupportFindConfigByIdQuery,
    ): Promise<SupportConfigResponse> {
        const config = await this.findConfigByIdService.main(
            new SupportConfigId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(config);
    }
}
