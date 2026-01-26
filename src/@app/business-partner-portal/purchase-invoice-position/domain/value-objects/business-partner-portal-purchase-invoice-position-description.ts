/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoicePositionDescription extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoicePositionDescription';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoicePositionDescription',
          nullable: false,
          undefinable: false,
          maxLength: 510,
        },
        validationRules,
      ),
    );
  }
}
