/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressAddressLine1 extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerAddressAddressLine1';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressAddressLine1',
          nullable: false,
          undefinable: false,
          maxLength: 255,
        },
        validationRules,
      ),
    );
  }
}
