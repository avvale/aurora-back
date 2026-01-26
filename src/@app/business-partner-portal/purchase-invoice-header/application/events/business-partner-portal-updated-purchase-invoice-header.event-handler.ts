/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedPurchaseInvoiceHeaderEvent } from '@app/business-partner-portal/purchase-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedPurchaseInvoiceHeaderEvent)
export class BusinessPartnerPortalUpdatedPurchaseInvoiceHeaderEventHandler
  implements
    IEventHandler<BusinessPartnerPortalUpdatedPurchaseInvoiceHeaderEvent>
{
  handle(event: BusinessPartnerPortalUpdatedPurchaseInvoiceHeaderEvent): void {
    // 'UpdatedPurchaseInvoiceHeaderEvent'
  }
}
