/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeCurrencyCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeCurrencyCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeCurrencyCode',
          nullable: true,
          undefinable: true,
          length: 3,
        },
        validationRules,
      ),
    );
  }
}
