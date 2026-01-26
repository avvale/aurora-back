/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import {
  DataValueObject,
  UuidValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalBusinessPartnerId extends UuidValueObject {
  public readonly type: string = 'BusinessPartnerPortalBusinessPartnerId';

  constructor(
    value: string,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalBusinessPartnerId',
          nullable: false,
          undefinable: false,
          length: 36,
        },
        validationRules,
      ),
      data,
    );
  }
}
