/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactPhoneSanitized extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerContactPhoneSanitized';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactPhoneSanitized',
          nullable: true,
          undefinable: true,
          maxLength: 64,
        },
        validationRules,
      ),
    );
  }
}
