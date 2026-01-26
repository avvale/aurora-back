/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalSupplierDocument } from '@api/graphql';
import { BusinessPartnerPortalFindSupplierDocumentByIdQuery } from '@app/business-partner-portal/supplier-document';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalFindSupplierDocumentByIdHandler {
  constructor(private readonly queryBus: IQueryBus) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    const supplierDocument = await this.queryBus.ask(
      new BusinessPartnerPortalFindSupplierDocumentByIdQuery(id, constraint, {
        timezone,
      }),
    );

    if (!supplierDocument) {
      throw new NotFoundException(
        `BusinessPartnerPortalSupplierDocument with id: ${id}, not found`,
      );
    }

    return supplierDocument;
  }
}
