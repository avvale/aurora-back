/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSalesInvoicePositionEvent } from '@app/business-partner-portal/sales-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedSalesInvoicePositionEvent)
export class BusinessPartnerPortalCreatedSalesInvoicePositionEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedSalesInvoicePositionEvent>
{
  handle(event: BusinessPartnerPortalCreatedSalesInvoicePositionEvent): void {
    // 'BusinessPartnerPortalCreatedSalesInvoicePositionEvent'
  }
}
