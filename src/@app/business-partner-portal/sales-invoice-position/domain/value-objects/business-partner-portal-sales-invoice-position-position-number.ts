/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-position.aurora.yaml
 */
import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoicePositionPositionNumber extends SmallintValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoicePositionPositionNumber';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoicePositionPositionNumber',
          nullable: false,
          undefinable: false,
          unsigned: true,
        },
        validationRules,
      ),
    );
  }
}
