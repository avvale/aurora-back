/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent } from '@app/business-partner-portal/sales-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent)
export class BusinessPartnerPortalCreatedSalesInvoiceHeaderEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent>
{
  handle(event: BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent): void {
    // 'BusinessPartnerPortalCreatedSalesInvoiceHeaderEvent'
  }
}
