/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-contact.aurora.yaml
 */
import {
  DataValueObject,
  UuidValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerContactUserId extends UuidValueObject {
  public readonly type: string = 'BusinessPartnerPortalPartnerContactUserId';

  constructor(
    value: string,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerContactUserId',
          nullable: true,
          undefinable: true,
          length: 36,
        },
        validationRules,
      ),
      data,
    );
  }
}
