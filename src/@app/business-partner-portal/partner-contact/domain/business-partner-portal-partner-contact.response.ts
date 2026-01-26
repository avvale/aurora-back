/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerResponse } from '@app/business-partner-portal/business-partner';
import { IamUserResponse } from '@app/iam/user';

export class BusinessPartnerPortalPartnerContactResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly businessPartnerId: string,
    public readonly firstName: string,
    public readonly lastName: string,
    public readonly position: string,
    public readonly department: string,
    public readonly email: string,
    public readonly phone: string,
    public readonly mobile: string,
    public readonly isPrimary: boolean,
    public readonly isActive: boolean,
    public readonly isUser: boolean,
    public readonly userId: string,
    public readonly preferredLanguage: string,
    public readonly notes: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly user: IamUserResponse,
    public readonly businessPartner: BusinessPartnerPortalBusinessPartnerResponse,
  ) {}
}
