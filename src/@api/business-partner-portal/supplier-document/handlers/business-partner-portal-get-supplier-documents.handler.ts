/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalSupplierDocument } from '@api/graphql';
import { BusinessPartnerPortalGetSupplierDocumentsQuery } from '@app/business-partner-portal/supplier-document';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalGetSupplierDocumentsHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSupplierDocument[]> {
    return await this.queryBus.ask(
      new BusinessPartnerPortalGetSupplierDocumentsQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
