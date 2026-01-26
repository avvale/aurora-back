/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressAddressLine2 extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerAddressAddressLine2';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressAddressLine2',
          nullable: true,
          undefinable: true,
          maxLength: 255,
        },
        validationRules,
      ),
    );
  }
}
