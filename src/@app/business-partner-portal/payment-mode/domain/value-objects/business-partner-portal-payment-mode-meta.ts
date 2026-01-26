/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentModeMeta extends JsonValueObject {
  public readonly type: string = 'BusinessPartnerPortalPaymentModeMeta';

  constructor(value: any, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentModeMeta',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
