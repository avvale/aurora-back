/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactPreferredLanguage extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerContactPreferredLanguage';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactPreferredLanguage',
          nullable: true,
          undefinable: true,
          length: 2,
        },
        validationRules,
      ),
    );
  }
}
