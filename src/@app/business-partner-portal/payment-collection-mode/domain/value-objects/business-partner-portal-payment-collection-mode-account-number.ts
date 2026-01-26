/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeAccountNumber extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeAccountNumber';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeAccountNumber',
          nullable: true,
          undefinable: true,
          maxLength: 128,
        },
        validationRules,
      ),
    );
  }
}
