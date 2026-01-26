/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { BusinessPartnerPortalPartnerAddressResponse } from '@app/business-partner-portal/partner-address';
import { BusinessPartnerPortalPartnerContactResponse } from '@app/business-partner-portal/partner-contact';
import { BusinessPartnerPortalPaymentCollectionModeResponse } from '@app/business-partner-portal/payment-collection-mode';

export class BusinessPartnerPortalBusinessPartnerResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly externalId: string,
    public readonly code: string,
    public readonly type: string[],
    public readonly name: string,
    public readonly tin: string,
    public readonly email: string,
    public readonly website: string,
    public readonly phone: string,
    public readonly phoneCountryPrefix: string,
    public readonly phoneSanitized: string,
    public readonly isActive: boolean,
    public readonly meta: any,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly contacts: BusinessPartnerPortalPartnerContactResponse[],
    public readonly addresses: BusinessPartnerPortalPartnerAddressResponse[],
    public readonly paymentCollectionModes: BusinessPartnerPortalPaymentCollectionModeResponse[],
  ) {}
}
