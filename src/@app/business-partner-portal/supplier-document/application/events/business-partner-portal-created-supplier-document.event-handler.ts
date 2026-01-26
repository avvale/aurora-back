/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSupplierDocumentEvent } from '@app/business-partner-portal/supplier-document';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedSupplierDocumentEvent)
export class BusinessPartnerPortalCreatedSupplierDocumentEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedSupplierDocumentEvent>
{
  handle(event: BusinessPartnerPortalCreatedSupplierDocumentEvent): void {
    // 'BusinessPartnerPortalCreatedSupplierDocumentEvent'
  }
}
