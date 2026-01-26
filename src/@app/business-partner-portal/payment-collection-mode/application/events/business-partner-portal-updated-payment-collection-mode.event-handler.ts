/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedPaymentCollectionModeEvent } from '@app/business-partner-portal/payment-collection-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedPaymentCollectionModeEvent)
export class BusinessPartnerPortalUpdatedPaymentCollectionModeEventHandler
  implements
    IEventHandler<BusinessPartnerPortalUpdatedPaymentCollectionModeEvent>
{
  handle(event: BusinessPartnerPortalUpdatedPaymentCollectionModeEvent): void {
    // 'UpdatedPaymentCollectionModeEvent'
  }
}
