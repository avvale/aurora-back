/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalCreatedPartnerAddressesEvent } from '@app/business-partner-portal/partner-address';
import { EventsHandler, IEventHandler } from '@nestjs/cqrs';

@EventsHandler(BusinessPartnerPortalCreatedPartnerAddressesEvent)
export class BusinessPartnerPortalCreatedPartnerAddressesEventHandler
  implements IEventHandler<BusinessPartnerPortalCreatedPartnerAddressesEvent>
{
  handle(event: BusinessPartnerPortalCreatedPartnerAddressesEvent): void {
    // 'CreatedPartnerAddressesEvent';
  }
}
