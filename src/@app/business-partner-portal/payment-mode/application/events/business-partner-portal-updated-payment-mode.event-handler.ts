/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedPaymentModeEvent } from '@app/business-partner-portal/payment-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedPaymentModeEvent)
export class BusinessPartnerPortalUpdatedPaymentModeEventHandler
  implements IEventHandler<BusinessPartnerPortalUpdatedPaymentModeEvent>
{
  handle(event: BusinessPartnerPortalUpdatedPaymentModeEvent): void {
    // 'UpdatedPaymentModeEvent'
  }
}
