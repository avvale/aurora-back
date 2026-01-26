/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedPurchaseInvoicePositionEvent } from '@app/business-partner-portal/purchase-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedPurchaseInvoicePositionEvent)
export class BusinessPartnerPortalUpdatedPurchaseInvoicePositionEventHandler
  implements
    IEventHandler<BusinessPartnerPortalUpdatedPurchaseInvoicePositionEvent>
{
  handle(
    event: BusinessPartnerPortalUpdatedPurchaseInvoicePositionEvent,
  ): void {
    // 'UpdatedPurchaseInvoicePositionEvent'
  }
}
