/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSalesInvoicePositionsEvent } from '@app/business-partner-portal/sales-invoice-position';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedSalesInvoicePositionsEvent)
export class BusinessPartnerPortalCreatedSalesInvoicePositionsEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedSalesInvoicePositionsEvent>
{
  handle(event: BusinessPartnerPortalCreatedSalesInvoicePositionsEvent): void {
    // 'CreatedSalesInvoicePositionsEvent';
  }
}
