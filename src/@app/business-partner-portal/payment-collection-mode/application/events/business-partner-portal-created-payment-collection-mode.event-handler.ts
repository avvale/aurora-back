/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPaymentCollectionModeEvent } from '@app/business-partner-portal/payment-collection-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPaymentCollectionModeEvent)
export class BusinessPartnerPortalCreatedPaymentCollectionModeEventHandler
  implements
    IEventHandler<BusinessPartnerPortalCreatedPaymentCollectionModeEvent>
{
  handle(event: BusinessPartnerPortalCreatedPaymentCollectionModeEvent): void {
    // 'BusinessPartnerPortalCreatedPaymentCollectionModeEvent'
  }
}
