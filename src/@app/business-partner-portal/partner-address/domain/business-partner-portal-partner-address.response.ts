/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { BusinessPartnerPortalBusinessPartnerResponse } from '@app/business-partner-portal/business-partner';
import { CommonAdministrativeAreaLevel1Response } from '@app/common/administrative-area-level-1';
import { CommonAdministrativeAreaLevel2Response } from '@app/common/administrative-area-level-2';
import { CommonAdministrativeAreaLevel3Response } from '@app/common/administrative-area-level-3';
import { CommonCountryResponse } from '@app/common/country';

export class BusinessPartnerPortalPartnerAddressResponse {
  constructor(
    public readonly id: string,
    public readonly rowId: number,
    public readonly businessPartnerId: string,
    public readonly type:
      | 'BILLING'
      | 'SHIPPING'
      | 'OFFICE'
      | 'WAREHOUSE'
      | 'HEADQUARTERS'
      | 'OTHER',
    public readonly label: string,
    public readonly addressLine1: string,
    public readonly addressLine2: string,
    public readonly city: string,
    public readonly postalCode: string,
    public readonly countryId: string,
    public readonly administrativeAreaLevel1Id: string,
    public readonly administrativeAreaLevel2Id: string,
    public readonly administrativeAreaLevel3Id: string,
    public readonly latitude: number,
    public readonly longitude: number,
    public readonly isPrimary: boolean,
    public readonly isActive: boolean,
    public readonly notes: string,
    public readonly createdAt: string,
    public readonly updatedAt: string,
    public readonly deletedAt: string,
    public readonly businessPartner: BusinessPartnerPortalBusinessPartnerResponse,
    public readonly country: CommonCountryResponse,
    public readonly administrativeAreaLevel1: CommonAdministrativeAreaLevel1Response,
    public readonly administrativeAreaLevel2: CommonAdministrativeAreaLevel2Response,
    public readonly administrativeAreaLevel3: CommonAdministrativeAreaLevel3Response,
  ) {}
}
