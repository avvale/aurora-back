/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays extends SmallintValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderPaymentTermDays',
          nullable: true,
          undefinable: true,
          unsigned: true,
        },
        validationRules,
      ),
    );
  }
}
