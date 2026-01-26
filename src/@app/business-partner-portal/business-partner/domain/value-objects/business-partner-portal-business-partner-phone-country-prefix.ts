/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalBusinessPartnerPhoneCountryPrefix',
          nullable: true,
          undefinable: true,
          maxLength: 4,
        },
        validationRules,
      ),
    );
  }
}
