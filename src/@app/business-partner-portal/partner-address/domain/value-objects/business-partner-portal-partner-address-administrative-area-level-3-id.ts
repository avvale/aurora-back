/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  DataValueObject,
  UuidValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id extends UuidValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id';

  constructor(
    value: string,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel3Id',
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
