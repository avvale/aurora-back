/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoicePositionQuantity extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoicePositionQuantity';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoicePositionQuantity',
          nullable: false,
          undefinable: false,
          decimals: [10, 4],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
