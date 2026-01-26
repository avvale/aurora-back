/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPaymentModesEvent } from '@app/business-partner-portal/payment-mode';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPaymentModesEvent)
export class BusinessPartnerPortalCreatedPaymentModesEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedPaymentModesEvent>
{
  handle(event: BusinessPartnerPortalCreatedPaymentModesEvent): void {
    // 'CreatedPaymentModesEvent';
  }
}
