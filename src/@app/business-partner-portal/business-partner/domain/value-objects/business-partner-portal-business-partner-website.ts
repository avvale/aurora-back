/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalBusinessPartnerWebsite extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalBusinessPartnerWebsite';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalBusinessPartnerWebsite',
          nullable: true,
          undefinable: true,
          maxLength: 1022,
        },
        validationRules,
      ),
    );
  }
}
