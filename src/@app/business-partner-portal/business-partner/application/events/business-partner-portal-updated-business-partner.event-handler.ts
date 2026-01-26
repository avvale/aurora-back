/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedBusinessPartnerEvent } from '@app/business-partner-portal/business-partner';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedBusinessPartnerEvent)
export class BusinessPartnerPortalUpdatedBusinessPartnerEventHandler
  implements IEventHandler<BusinessPartnerPortalUpdatedBusinessPartnerEvent>
{
  handle(event: BusinessPartnerPortalUpdatedBusinessPartnerEvent): void {
    // 'UpdatedBusinessPartnerEvent'
  }
}
