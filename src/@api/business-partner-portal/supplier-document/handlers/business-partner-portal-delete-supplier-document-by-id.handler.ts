/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalSupplierDocument } from '@api/graphql';
import {
  BusinessPartnerPortalDeleteSupplierDocumentByIdCommand,
  BusinessPartnerPortalFindSupplierDocumentByIdQuery,
} from '@app/business-partner-portal/supplier-document';
import {
  AuditingMeta,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalDeleteSupplierDocumentByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    id: string,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
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

    await this.commandBus.dispatch(
      new BusinessPartnerPortalDeleteSupplierDocumentByIdCommand(
        id,
        constraint,
        {
          timezone,
          repositoryOptions: {
            auditing,
          },
        },
      ),
    );

    return supplierDocument;
  }
}
