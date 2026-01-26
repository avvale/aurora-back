/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPartnerContactEvent } from '@app/business-partner-portal/partner-contact';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPartnerContactEvent)
export class BusinessPartnerPortalCreatedPartnerContactEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedPartnerContactEvent>
{
  handle(event: BusinessPartnerPortalCreatedPartnerContactEvent): void {
    // 'BusinessPartnerPortalCreatedPartnerContactEvent'
  }
}
