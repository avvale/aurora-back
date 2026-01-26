/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderTotalAmount extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderTotalAmount';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderTotalAmount',
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
