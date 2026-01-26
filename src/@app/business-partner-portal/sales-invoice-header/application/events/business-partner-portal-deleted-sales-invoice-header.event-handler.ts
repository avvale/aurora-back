/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalDeletedSalesInvoiceHeaderEvent } from '@app/business-partner-portal/sales-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedSalesInvoiceHeaderEvent)
export class BusinessPartnerPortalDeletedSalesInvoiceHeaderEventHandler
  implements IEventHandler<BusinessPartnerPortalDeletedSalesInvoiceHeaderEvent>
{
  handle(event: BusinessPartnerPortalDeletedSalesInvoiceHeaderEvent): void {
    // BusinessPartnerPortalDeletedSalesInvoiceHeaderEvent'
  }
}
