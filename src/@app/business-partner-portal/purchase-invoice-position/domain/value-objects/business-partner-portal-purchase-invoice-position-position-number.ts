/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoicePositionPositionNumber extends SmallintValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoicePositionPositionNumber';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoicePositionPositionNumber',
          nullable: false,
          undefinable: false,
          unsigned: true,
        },
        validationRules,
      ),
    );
  }
}
