/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent } from '@app/business-partner-portal/purchase-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent)
export class BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent>
{
  handle(event: BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent): void {
    // 'BusinessPartnerPortalCreatedPurchaseInvoiceHeaderEvent'
  }
}
