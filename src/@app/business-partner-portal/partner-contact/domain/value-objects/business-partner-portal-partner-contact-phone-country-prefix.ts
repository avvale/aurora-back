/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactPhoneCountryPrefix extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerContactPhoneCountryPrefix';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactPhoneCountryPrefix',
          nullable: true,
          undefinable: true,
          maxLength: 4,
        },
        validationRules,
      ),
    );
  }
}
