/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactMobileSanitized extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerContactMobileSanitized';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactMobileSanitized',
          nullable: true,
          undefinable: true,
          maxLength: 64,
        },
        validationRules,
      ),
    );
  }
}
