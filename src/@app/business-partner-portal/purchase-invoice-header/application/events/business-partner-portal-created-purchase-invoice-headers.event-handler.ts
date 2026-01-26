/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEvent } from '@app/business-partner-portal/purchase-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEvent)
export class BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEvent>
{
  handle(event: BusinessPartnerPortalCreatedPurchaseInvoiceHeadersEvent): void {
    // 'CreatedPurchaseInvoiceHeadersEvent';
  }
}
