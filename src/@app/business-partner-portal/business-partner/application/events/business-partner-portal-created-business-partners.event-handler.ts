/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalCreatedBusinessPartnersEvent } from '@app/business-partner-portal/business-partner';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedBusinessPartnersEvent)
export class BusinessPartnerPortalCreatedBusinessPartnersEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedBusinessPartnersEvent>
{
  handle(event: BusinessPartnerPortalCreatedBusinessPartnersEvent): void {
    // 'CreatedBusinessPartnersEvent';
  }
}
