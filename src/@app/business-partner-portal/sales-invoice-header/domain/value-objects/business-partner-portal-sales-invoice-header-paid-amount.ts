/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderPaidAmount extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderPaidAmount';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderPaidAmount',
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
