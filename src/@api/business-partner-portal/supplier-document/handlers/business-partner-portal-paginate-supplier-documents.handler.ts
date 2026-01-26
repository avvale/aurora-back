/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { Pagination } from '@api/graphql';
import { BusinessPartnerPortalPaginateSupplierDocumentsQuery } from '@app/business-partner-portal/supplier-document';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalPaginateSupplierDocumentsHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<Pagination> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalPaginateSupplierDocumentsQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
