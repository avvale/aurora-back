/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderApprovalNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
