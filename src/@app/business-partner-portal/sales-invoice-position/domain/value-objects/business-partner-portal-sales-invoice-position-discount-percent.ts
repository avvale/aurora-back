/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionDiscountPercent extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoicePositionDiscountPercent';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoicePositionDiscountPercent',
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
