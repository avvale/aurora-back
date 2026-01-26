/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEvent } from '@app/business-partner-portal/purchase-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEvent)
export class BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEventHandler
  implements
    IEventHandler<BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEvent>
{
  handle(event: BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEvent): void {
    // BusinessPartnerPortalDeletedPurchaseInvoiceHeaderEvent'
  }
}
