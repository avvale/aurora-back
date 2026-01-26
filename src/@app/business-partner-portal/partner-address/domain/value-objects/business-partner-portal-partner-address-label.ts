/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressLabel extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalPartnerAddressLabel';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressLabel',
          nullable: true,
          undefinable: true,
          maxLength: 128,
        },
        validationRules,
      ),
    );
  }
}
