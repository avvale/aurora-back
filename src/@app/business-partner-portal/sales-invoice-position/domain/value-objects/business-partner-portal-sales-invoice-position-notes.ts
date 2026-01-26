/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionNotes extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoicePositionNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoicePositionNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
