/**
 * @aurora-generated
 * @source cliter/business-partner-portal/payment-collection-mode.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPaymentCollectionModeNotes extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPaymentCollectionModeNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPaymentCollectionModeNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
