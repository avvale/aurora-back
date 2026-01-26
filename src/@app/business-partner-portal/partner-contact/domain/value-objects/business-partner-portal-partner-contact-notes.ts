/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactNotes extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalPartnerContactNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
