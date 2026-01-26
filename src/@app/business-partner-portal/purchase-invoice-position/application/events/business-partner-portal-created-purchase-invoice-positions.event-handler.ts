/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPurchaseInvoicePositionsEvent } from '@app/business-partner-portal/purchase-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPurchaseInvoicePositionsEvent)
export class BusinessPartnerPortalCreatedPurchaseInvoicePositionsEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedPurchaseInvoicePositionsEvent>
{
  handle(
    event: BusinessPartnerPortalCreatedPurchaseInvoicePositionsEvent,
  ): void {
    // 'CreatedPurchaseInvoicePositionsEvent';
  }
}
