/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-mode.aurora.yaml
 */
import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentModeType extends EnumValueObject<
  | 'ELECTRONIC'
  | 'CASH'
  | 'CHECK'
  | 'CARD'
  | 'WIRE'
  | 'DIRECT_DEBIT'
  | 'DIGITAL_WALLET'
  | 'OTHER'
> {
  public readonly type: string = 'BusinessPartnerPortalPaymentModeType';

  constructor(
    value:
      | 'ELECTRONIC'
      | 'CASH'
      | 'CHECK'
      | 'CARD'
      | 'WIRE'
      | 'DIRECT_DEBIT'
      | 'DIGITAL_WALLET'
      | 'OTHER',
    validationRules: ValidationRules = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentModeType',
          nullable: false,
          undefinable: false,
          enumOptions: [
            'ELECTRONIC',
            'CASH',
            'CHECK',
            'CARD',
            'WIRE',
            'DIRECT_DEBIT',
            'DIGITAL_WALLET',
            'OTHER',
          ],
        },
        validationRules,
      ),
    );
  }
}
