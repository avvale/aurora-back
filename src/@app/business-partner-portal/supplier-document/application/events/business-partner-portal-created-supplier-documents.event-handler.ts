/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSupplierDocumentsEvent } from '@app/business-partner-portal/supplier-document';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedSupplierDocumentsEvent)
export class BusinessPartnerPortalCreatedSupplierDocumentsEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedSupplierDocumentsEvent>
{
  handle(event: BusinessPartnerPortalCreatedSupplierDocumentsEvent): void {
    // 'CreatedSupplierDocumentsEvent';
  }
}
