/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalCreatedBusinessPartnerEvent } from '@app/business-partner-portal/business-partner';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedBusinessPartnerEvent)
export class BusinessPartnerPortalCreatedBusinessPartnerEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedBusinessPartnerEvent>
{
  handle(event: BusinessPartnerPortalCreatedBusinessPartnerEvent): void {
    // 'BusinessPartnerPortalCreatedBusinessPartnerEvent'
  }
}
