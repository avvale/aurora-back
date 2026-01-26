/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionTaxPercent extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoicePositionTaxPercent';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoicePositionTaxPercent',
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
