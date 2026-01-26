/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderCurrencyCode',
          nullable: false,
          undefinable: false,
          length: 3,
        },
        validationRules,
      ),
    );
  }
}
