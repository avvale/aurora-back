/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedSupplierDocumentEvent } from '@app/business-partner-portal/supplier-document';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedSupplierDocumentEvent)
export class BusinessPartnerPortalUpdatedSupplierDocumentEventHandler
  implements IEventHandler<BusinessPartnerPortalUpdatedSupplierDocumentEvent>
{
  handle(event: BusinessPartnerPortalUpdatedSupplierDocumentEvent): void {
    // 'UpdatedSupplierDocumentEvent'
  }
}
