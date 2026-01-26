/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalDeletedSalesInvoicePositionEvent } from '@app/business-partner-portal/sales-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedSalesInvoicePositionEvent)
export class BusinessPartnerPortalDeletedSalesInvoicePositionEventHandler
  implements
    IEventHandler<BusinessPartnerPortalDeletedSalesInvoicePositionEvent>
{
  handle(event: BusinessPartnerPortalDeletedSalesInvoicePositionEvent): void {
    // BusinessPartnerPortalDeletedSalesInvoicePositionEvent'
  }
}
