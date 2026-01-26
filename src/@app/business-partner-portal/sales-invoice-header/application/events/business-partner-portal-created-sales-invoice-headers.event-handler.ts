/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSalesInvoiceHeadersEvent } from '@app/business-partner-portal/sales-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedSalesInvoiceHeadersEvent)
export class BusinessPartnerPortalCreatedSalesInvoiceHeadersEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedSalesInvoiceHeadersEvent>
{
  handle(event: BusinessPartnerPortalCreatedSalesInvoiceHeadersEvent): void {
    // 'CreatedSalesInvoiceHeadersEvent';
  }
}
