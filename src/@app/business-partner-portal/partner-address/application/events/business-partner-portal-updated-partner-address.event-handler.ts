/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalUpdatedPartnerAddressEvent } from '@app/business-partner-portal/partner-address';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalUpdatedPartnerAddressEvent)
export class BusinessPartnerPortalUpdatedPartnerAddressEventHandler
  implements IEventHandler<BusinessPartnerPortalUpdatedPartnerAddressEvent>
{
  handle(event: BusinessPartnerPortalUpdatedPartnerAddressEvent): void {
    // 'UpdatedPartnerAddressEvent'
  }
}
