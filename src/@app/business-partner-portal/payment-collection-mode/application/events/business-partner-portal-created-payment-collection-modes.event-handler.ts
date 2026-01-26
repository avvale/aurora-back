/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPaymentCollectionModesEvent } from '@app/business-partner-portal/payment-collection-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPaymentCollectionModesEvent)
export class BusinessPartnerPortalCreatedPaymentCollectionModesEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedPaymentCollectionModesEvent>
{
  handle(event: BusinessPartnerPortalCreatedPaymentCollectionModesEvent): void {
    // 'CreatedPaymentCollectionModesEvent';
  }
}
