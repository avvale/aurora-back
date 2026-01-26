/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentModeSort extends SmallintValueObject {
  public readonly type: string = 'BusinessPartnerPortalPaymentModeSort';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentModeSort',
          nullable: true,
          undefinable: true,
          unsigned: true,
        },
        validationRules,
      ),
    );
  }
}
