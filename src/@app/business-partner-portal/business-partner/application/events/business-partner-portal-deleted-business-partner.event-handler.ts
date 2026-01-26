/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalDeletedBusinessPartnerEvent } from '@app/business-partner-portal/business-partner';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedBusinessPartnerEvent)
export class BusinessPartnerPortalDeletedBusinessPartnerEventHandler
  implements IEventHandler<BusinessPartnerPortalDeletedBusinessPartnerEvent>
{
  handle(event: BusinessPartnerPortalDeletedBusinessPartnerEvent): void {
    // BusinessPartnerPortalDeletedBusinessPartnerEvent'
  }
}
