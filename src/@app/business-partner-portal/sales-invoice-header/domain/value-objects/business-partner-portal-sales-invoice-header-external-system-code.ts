/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderExternalSystemCode',
          nullable: true,
          undefinable: true,
          maxLength: 16,
        },
        validationRules,
      ),
    );
  }
}
