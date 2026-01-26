/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressLatitude extends DecimalValueObject {
  public readonly type: string = 'BusinessPartnerPortalPartnerAddressLatitude';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressLatitude',
          nullable: true,
          undefinable: true,
          decimals: [16, 14],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
