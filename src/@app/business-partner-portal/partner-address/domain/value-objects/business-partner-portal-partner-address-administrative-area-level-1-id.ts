/**
 * @aurora-generated
 * @source cliter/business-partner-portal/partner-address.aurora.yaml
 */
import {
  DataValueObject,
  UuidValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id extends UuidValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id';

  constructor(
    value: string,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPartnerAddressAdministrativeAreaLevel1Id',
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
