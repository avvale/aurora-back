/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeRoutingNumber extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeRoutingNumber';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeRoutingNumber',
          nullable: true,
          undefinable: true,
          maxLength: 64,
        },
        validationRules,
      ),
    );
  }
}
