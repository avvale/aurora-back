/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderNotes extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalSalesInvoiceHeaderNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
