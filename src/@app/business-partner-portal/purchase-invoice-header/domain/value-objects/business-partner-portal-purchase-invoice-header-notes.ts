/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderNotes extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
