/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  BooleanValueObject,
  DataValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeIsPrimary extends BooleanValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeIsPrimary';

  constructor(
    value: boolean,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeIsPrimary',
          nullable: false,
          undefinable: false,
        },
        validationRules,
      ),
      data,
    );
  }
}
