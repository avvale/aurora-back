/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPartnerAddressEvent } from '@app/business-partner-portal/partner-address';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPartnerAddressEvent)
export class BusinessPartnerPortalCreatedPartnerAddressEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedPartnerAddressEvent>
{
  handle(event: BusinessPartnerPortalCreatedPartnerAddressEvent): void {
    // 'BusinessPartnerPortalCreatedPartnerAddressEvent'
  }
}
