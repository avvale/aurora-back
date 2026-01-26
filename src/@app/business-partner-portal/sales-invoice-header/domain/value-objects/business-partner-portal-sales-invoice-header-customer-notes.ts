/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderCustomerNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
