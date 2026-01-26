/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import {
  DataValueObject,
  TimestampValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeLastUsedAt extends TimestampValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeLastUsedAt';

  constructor(
    value: string | DataValueObject,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeLastUsedAt',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
      data,
    );
  }
}
