/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactPosition extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalPartnerContactPosition';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactPosition',
          nullable: true,
          undefinable: true,
          maxLength: 128,
        },
        validationRules,
      ),
    );
  }
}
