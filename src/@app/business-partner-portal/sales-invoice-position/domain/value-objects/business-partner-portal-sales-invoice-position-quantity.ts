/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionQuantity extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoicePositionQuantity';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoicePositionQuantity',
          nullable: false,
          undefinable: false,
          decimals: [10, 4],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
