/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent } from '@app/business-partner-portal/purchase-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent)
export class BusinessPartnerPortalCreatedPurchaseInvoicePositionEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent>
{
  handle(
    event: BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent,
  ): void {
    // 'BusinessPartnerPortalCreatedPurchaseInvoicePositionEvent'
  }
}
