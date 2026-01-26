/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentModeDescription extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalPaymentModeDescription';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentModeDescription',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
