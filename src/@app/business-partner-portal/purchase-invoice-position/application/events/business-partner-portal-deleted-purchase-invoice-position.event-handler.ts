/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalDeletedPurchaseInvoicePositionEvent } from '@app/business-partner-portal/purchase-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedPurchaseInvoicePositionEvent)
export class BusinessPartnerPortalDeletedPurchaseInvoicePositionEventHandler
  implements
    IEventHandler<BusinessPartnerPortalDeletedPurchaseInvoicePositionEvent>
{
  handle(
    event: BusinessPartnerPortalDeletedPurchaseInvoicePositionEvent,
  ): void {
    // BusinessPartnerPortalDeletedPurchaseInvoicePositionEvent'
  }
}
