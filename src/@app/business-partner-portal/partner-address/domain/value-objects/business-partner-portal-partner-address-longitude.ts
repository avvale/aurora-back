/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressLongitude extends DecimalValueObject {
  public readonly type: string = 'BusinessPartnerPortalPartnerAddressLongitude';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressLongitude',
          nullable: true,
          undefinable: true,
          decimals: [17, 14],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
