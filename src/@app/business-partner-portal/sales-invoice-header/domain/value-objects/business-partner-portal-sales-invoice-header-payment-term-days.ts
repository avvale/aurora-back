/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays extends SmallintValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderPaymentTermDays',
          nullable: true,
          undefinable: true,
          unsigned: true,
        },
        validationRules,
      ),
    );
  }
}
