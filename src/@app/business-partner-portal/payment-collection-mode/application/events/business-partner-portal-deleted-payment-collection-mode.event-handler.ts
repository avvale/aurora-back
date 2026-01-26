/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalDeletedPaymentCollectionModeEvent } from '@app/business-partner-portal/payment-collection-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedPaymentCollectionModeEvent)
export class BusinessPartnerPortalDeletedPaymentCollectionModeEventHandler
  implements
    IEventHandler<BusinessPartnerPortalDeletedPaymentCollectionModeEvent>
{
  handle(event: BusinessPartnerPortalDeletedPaymentCollectionModeEvent): void {
    // BusinessPartnerPortalDeletedPaymentCollectionModeEvent'
  }
}
