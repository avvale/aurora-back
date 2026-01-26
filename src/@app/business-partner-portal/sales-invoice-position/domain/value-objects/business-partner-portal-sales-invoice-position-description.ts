/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionDescription extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoicePositionDescription';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoicePositionDescription',
          nullable: false,
          undefinable: false,
          maxLength: 510,
        },
        validationRules,
      ),
    );
  }
}
