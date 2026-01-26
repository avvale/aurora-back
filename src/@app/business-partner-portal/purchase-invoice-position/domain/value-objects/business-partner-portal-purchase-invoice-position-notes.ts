/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-position.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoicePositionNotes extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoicePositionNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoicePositionNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
