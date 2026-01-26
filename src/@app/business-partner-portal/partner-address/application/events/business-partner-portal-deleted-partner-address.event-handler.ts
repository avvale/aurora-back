/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalDeletedPartnerAddressEvent } from '@app/business-partner-portal/partner-address';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalDeletedPartnerAddressEvent)
export class BusinessPartnerPortalDeletedPartnerAddressEventHandler
  implements IEventHandler<BusinessPartnerPortalDeletedPartnerAddressEvent>
{
  handle(event: BusinessPartnerPortalDeletedPartnerAddressEvent): void {
    // BusinessPartnerPortalDeletedPartnerAddressEvent'
  }
}
