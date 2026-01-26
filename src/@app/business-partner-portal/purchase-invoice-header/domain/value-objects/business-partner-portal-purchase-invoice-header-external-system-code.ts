/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderExternalSystemCode',
          nullable: true,
          undefinable: true,
          maxLength: 16,
        },
        validationRules,
      ),
    );
  }
}
