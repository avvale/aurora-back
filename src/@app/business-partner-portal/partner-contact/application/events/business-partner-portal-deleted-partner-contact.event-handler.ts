/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalDeletedPartnerContactEvent } from '@app/business-partner-portal/partner-contact';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedPartnerContactEvent)
export class BusinessPartnerPortalDeletedPartnerContactEventHandler
  implements IEventHandler<BusinessPartnerPortalDeletedPartnerContactEvent>
{
  handle(event: BusinessPartnerPortalDeletedPartnerContactEvent): void {
    // BusinessPartnerPortalDeletedPartnerContactEvent'
  }
}
