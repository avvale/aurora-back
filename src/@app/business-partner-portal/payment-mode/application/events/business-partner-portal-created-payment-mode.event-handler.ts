/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPaymentModeEvent } from '@app/business-partner-portal/payment-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPaymentModeEvent)
export class BusinessPartnerPortalCreatedPaymentModeEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedPaymentModeEvent>
{
  handle(event: BusinessPartnerPortalCreatedPaymentModeEvent): void {
    // 'BusinessPartnerPortalCreatedPaymentModeEvent'
  }
}
