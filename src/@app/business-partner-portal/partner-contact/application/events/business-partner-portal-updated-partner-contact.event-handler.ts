/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedPartnerContactEvent } from '@app/business-partner-portal/partner-contact';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedPartnerContactEvent)
export class BusinessPartnerPortalUpdatedPartnerContactEventHandler
  implements IEventHandler<BusinessPartnerPortalUpdatedPartnerContactEvent>
{
  handle(event: BusinessPartnerPortalUpdatedPartnerContactEvent): void {
    // 'UpdatedPartnerContactEvent'
  }
}
