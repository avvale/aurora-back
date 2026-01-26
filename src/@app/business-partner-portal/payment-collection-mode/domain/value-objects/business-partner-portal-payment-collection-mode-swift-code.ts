/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeSwiftCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeSwiftCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeSwiftCode',
          nullable: true,
          undefinable: true,
          maxLength: 11,
        },
        validationRules,
      ),
    );
  }
}
