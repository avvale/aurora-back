/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalDeletedPaymentModeEvent } from '@app/business-partner-portal/payment-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedPaymentModeEvent)
export class BusinessPartnerPortalDeletedPaymentModeEventHandler
  implements IEventHandler<BusinessPartnerPortalDeletedPaymentModeEvent>
{
  handle(event: BusinessPartnerPortalDeletedPaymentModeEvent): void {
    // BusinessPartnerPortalDeletedPaymentModeEvent'
  }
}
