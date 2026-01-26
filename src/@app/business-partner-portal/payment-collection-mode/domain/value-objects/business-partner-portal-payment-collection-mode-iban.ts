/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeIban extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeIban';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeIban',
          nullable: true,
          undefinable: true,
          maxLength: 34,
        },
        validationRules,
      ),
    );
  }
}
