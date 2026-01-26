/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactDepartment extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerContactDepartment';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactDepartment',
          nullable: true,
          undefinable: true,
          maxLength: 128,
        },
        validationRules,
      ),
    );
  }
}
