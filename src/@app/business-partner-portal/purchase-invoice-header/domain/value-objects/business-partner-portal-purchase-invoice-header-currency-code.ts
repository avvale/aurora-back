/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderCurrencyCode',
          nullable: false,
          undefinable: false,
          length: 3,
        },
        validationRules,
      ),
    );
  }
}
