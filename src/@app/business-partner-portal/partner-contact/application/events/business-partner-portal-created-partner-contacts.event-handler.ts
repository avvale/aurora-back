/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPartnerContactsEvent } from '@app/business-partner-portal/partner-contact';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPartnerContactsEvent)
export class BusinessPartnerPortalCreatedPartnerContactsEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedPartnerContactsEvent>
{
  handle(event: BusinessPartnerPortalCreatedPartnerContactsEvent): void {
    // 'CreatedPartnerContactsEvent';
  }
}
