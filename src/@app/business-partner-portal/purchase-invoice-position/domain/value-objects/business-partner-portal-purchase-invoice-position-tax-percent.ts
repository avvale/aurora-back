/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoicePositionTaxPercent extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoicePositionTaxPercent';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoicePositionTaxPercent',
          nullable: false,
          undefinable: false,
          decimals: [5, 2],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
