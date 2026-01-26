/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeBankName extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeBankName';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeBankName',
          nullable: true,
          undefinable: true,
          maxLength: 128,
        },
        validationRules,
      ),
    );
  }
}
