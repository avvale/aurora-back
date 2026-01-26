/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalDeletedSupplierDocumentEvent } from '@app/business-partner-portal/supplier-document';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedSupplierDocumentEvent)
export class BusinessPartnerPortalDeletedSupplierDocumentEventHandler
  implements IEventHandler<BusinessPartnerPortalDeletedSupplierDocumentEvent>
{
  handle(event: BusinessPartnerPortalDeletedSupplierDocumentEvent): void {
    // BusinessPartnerPortalDeletedSupplierDocumentEvent'
  }
}
