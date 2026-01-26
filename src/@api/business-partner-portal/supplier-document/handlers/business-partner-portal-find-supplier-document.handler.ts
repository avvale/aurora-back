/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalSupplierDocument } from '@api/graphql';
import { BusinessPartnerPortalFindSupplierDocumentQuery } from '@app/business-partner-portal/supplier-document';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSupplierDocumentHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    queryStatement?: QueryStatement,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    const supplierDocument = await this.queryBus.ask(
      new BusinessPartnerPortalFindSupplierDocumentQuery(
        queryStatement,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!supplierDocument) {
      throw new NotFoundException(
        `BusinessPartnerPortalSupplierDocument not found`,
      );
    }

    return supplierDocument;
  }
}
