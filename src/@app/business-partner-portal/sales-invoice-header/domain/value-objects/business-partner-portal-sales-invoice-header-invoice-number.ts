/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderInvoiceNumber',
          nullable: false,
          undefinable: false,
          maxLength: 64,
        },
        validationRules,
      ),
    );
  }
}
