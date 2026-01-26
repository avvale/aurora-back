/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedSalesInvoicePositionEvent } from '@app/business-partner-portal/sales-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedSalesInvoicePositionEvent)
export class BusinessPartnerPortalUpdatedSalesInvoicePositionEventHandler
  implements
    IEventHandler<BusinessPartnerPortalUpdatedSalesInvoicePositionEvent>
{
  handle(event: BusinessPartnerPortalUpdatedSalesInvoicePositionEvent): void {
    // 'UpdatedSalesInvoicePositionEvent'
  }
}
