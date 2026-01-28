/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactMobileCountryPrefix extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerContactMobileCountryPrefix';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactMobileCountryPrefix',
          nullable: true,
          undefinable: true,
          maxLength: 4,
        },
        validationRules,
      ),
    );
  }
}
