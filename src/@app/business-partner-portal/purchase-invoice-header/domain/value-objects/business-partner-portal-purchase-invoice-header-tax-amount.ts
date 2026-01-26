/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderTaxAmount',
          nullable: false,
          undefinable: false,
          decimals: [12, 2],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
