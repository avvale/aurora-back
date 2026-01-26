/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressNotes extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalPartnerAddressNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
