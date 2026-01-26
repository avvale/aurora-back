/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerResponse } from '@app/business-partner-portal/business-partner';
import { BusinessPartnerPortalPaymentModeResponse } from '@app/business-partner-portal/payment-mode';

export class BusinessPartnerPortalPaymentCollectionModeResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly businessPartnerId: string,
    public readonly paymentModeId: string,
    public readonly label: string,
    public readonly accountNumber: string,
    public readonly accountHolderName: string,
    public readonly bankName: string,
    public readonly routingNumber: string,
    public readonly iban: string,
    public readonly swiftCode: string,
    public readonly currencyCode: string,
    public readonly expirationDate: string,
    public readonly isPrimary: boolean,
    public readonly isActive: boolean,
    public readonly notes: string,
    public readonly lastUsedAt: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly businessPartner: BusinessPartnerPortalBusinessPartnerResponse,
    public readonly paymentMode: BusinessPartnerPortalPaymentModeResponse,
  ) {}
}
