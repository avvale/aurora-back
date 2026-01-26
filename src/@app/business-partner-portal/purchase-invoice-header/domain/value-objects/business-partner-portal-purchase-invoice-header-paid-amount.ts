/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderPaidAmount',
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
