/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  BusinessPartnerPortalCreateSupplierDocumentInput,
  BusinessPartnerPortalSupplierDocument,
} from '@api/graphql';
import {
  BusinessPartnerPortalCreateSupplierDocumentCommand,
  BusinessPartnerPortalFindSupplierDocumentByIdQuery,
} from '@app/business-partner-portal/supplier-document';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessPartnerPortalCreateSupplierDocumentHandler {
  constructor(
    private readonly commandBus: ICommandBus,
    private readonly queryBus: IQueryBus,
  ) {}

  async main(
    payload: BusinessPartnerPortalCreateSupplierDocumentInput,
    timezone?: string,
    auditing?: AuditingMeta,
  ): Promise<BusinessPartnerPortalSupplierDocument> {
    await this.commandBus.dispatch(
      new BusinessPartnerPortalCreateSupplierDocumentCommand(payload, {
        timezone,
        repositoryOptions: {
          auditing,
        },
      }),
    );

    return await this.queryBus.ask(
      new BusinessPartnerPortalFindSupplierDocumentByIdQuery(
        payload.id,
        {},
        {
          timezone,
        },
      ),
    );
  }
}
