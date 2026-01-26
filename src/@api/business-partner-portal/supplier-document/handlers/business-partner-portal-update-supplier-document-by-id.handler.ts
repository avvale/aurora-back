/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalSupplierDocument,
  BusinessPartnerPortalUpdateSupplierDocumentByIdInput,
} from '@api/graphql';
import {
  BusinessPartnerPortalFindSupplierDocumentByIdQuery,
  BusinessPartnerPortalUpdateSupplierDocumentByIdCommand,
} from '@app/business-partner-portal/supplier-document';
import {
  AuditingMeta,
  diff,
  ICommandBus,
  IQueryBus,
  QueryStatement,
} from '@aurorajs.dev/core';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalUpdateSupplierDocumentByIdHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalUpdateSupplierDocumentByIdInput,
    constraint?: QueryStatement,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    const supplierDocument = await this.queryBus.ask(
      new BusinessPartnerPortalFindSupplierDocumentByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );

    if (!supplierDocument) {
      throw new NotFoundException(
        `BusinessPartnerPortalSupplierDocument with id: ${payload.id}, not found`,
      );
    }

    const dataToUpdate = diff(payload, supplierDocument);

    await this.commandBus.dispatch(
      new BusinessPartnerPortalUpdateSupplierDocumentByIdCommand(
        {
          ...dataToUpdate,
          id: payload.id,
        },
        constraint,
        {
          timezone,
          repositoryOptions: {
            auditing,
          },
        },
      ),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindSupplierDocumentByIdQuery(
        payload.id,
        constraint,
        {
          timezone,
        },
      ),
    );
  }
}
