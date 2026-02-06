/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerResponse } from '@app/business-partner-portal/business-partner';
import { CommonLangResponse } from '@app/common/lang';
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
    public readonly phoneCountryPrefix: string,
    public readonly phoneSanitized: string,
    public readonly mobile: string,
    public readonly mobileCountryPrefix: string,
    public readonly mobileSanitized: string,
    public readonly isPrincipal: boolean,
    public readonly isActive: boolean,
    public readonly isUser: boolean,
    public readonly userId: string,
    public readonly langId: string,
    public readonly notes: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly user: IamUserResponse,
    public readonly businessPartner: BusinessPartnerPortalBusinessPartnerResponse,
    public readonly lang: CommonLangResponse,
  ) {}
}
