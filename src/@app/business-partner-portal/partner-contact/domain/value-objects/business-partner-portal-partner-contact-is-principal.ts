/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  BooleanValueObject,
  DataValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactIsPrincipal extends BooleanValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerContactIsPrincipal';

  constructor(
    value: boolean,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactIsPrincipal',
          nullable: false,
          undefinable: false,
        },
        validationRules,
      ),
      data,
    );
  }
}
