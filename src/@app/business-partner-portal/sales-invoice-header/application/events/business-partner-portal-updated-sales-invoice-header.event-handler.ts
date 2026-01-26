/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedSalesInvoiceHeaderEvent } from '@app/business-partner-portal/sales-invoice-header';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedSalesInvoiceHeaderEvent)
export class BusinessPartnerPortalUpdatedSalesInvoiceHeaderEventHandler
  implements IEventHandler<BusinessPartnerPortalUpdatedSalesInvoiceHeaderEvent>
{
  handle(event: BusinessPartnerPortalUpdatedSalesInvoiceHeaderEvent): void {
    // 'UpdatedSalesInvoiceHeaderEvent'
  }
}
