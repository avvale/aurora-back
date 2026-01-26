/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionTaxAmount extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoicePositionTaxAmount';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoicePositionTaxAmount',
          nullable: false,
          undefinable: false,
          decimals: [12, 2],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
