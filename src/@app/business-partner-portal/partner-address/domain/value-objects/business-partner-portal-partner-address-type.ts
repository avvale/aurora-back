/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressType extends EnumValueObject<
  'BILLING' | 'SHIPPING' | 'OFFICE' | 'WAREHOUSE' | 'HEADQUARTERS' | 'OTHER'
> {
  public readonly type: string = 'BusinessPartnerPortalPartnerAddressType';

  constructor(
    value:
      | 'BILLING'
      | 'SHIPPING'
      | 'OFFICE'
      | 'WAREHOUSE'
      | 'HEADQUARTERS'
      | 'OTHER',
    validationRules: ValidationRules = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressType',
          nullable: false,
          undefinable: false,
          enumOptions: [
            'BILLING',
            'SHIPPING',
            'OFFICE',
            'WAREHOUSE',
            'HEADQUARTERS',
            'OTHER',
          ],
        },
        validationRules,
      ),
    );
  }
}
