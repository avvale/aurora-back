/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import {
  BooleanValueObject,
  DataValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentModeIsRecurringSupported extends BooleanValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentModeIsRecurringSupported';

  constructor(
    value: boolean,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentModeIsRecurringSupported',
          nullable: false,
          undefinable: false,
        },
        validationRules,
      ),
      data,
    );
  }
}
