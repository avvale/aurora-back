/**
 * @aurora-generated
 * @source cliter/business-partner-portal/purchase-invoice-header.aurora.yaml
 */
import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalPurchaseInvoiceHeaderStatus extends EnumValueObject<
  | 'DRAFT'
  | 'RECEIVED'
  | 'APPROVED'
  | 'PAID'
  | 'PARTIALLY_PAID'
  | 'OVERDUE'
  | 'CANCELLED'
  | 'REFUNDED'
> {
  public readonly type: string =
    'BusinessPartnerPortalPurchaseInvoiceHeaderStatus';

  constructor(
    value:
      | 'DRAFT'
      | 'RECEIVED'
      | 'APPROVED'
      | 'PAID'
      | 'PARTIALLY_PAID'
      | 'OVERDUE'
      | 'CANCELLED'
      | 'REFUNDED',
    validationRules: ValidationRules = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalPurchaseInvoiceHeaderStatus',
          nullable: false,
          undefinable: false,
          enumOptions: [
            'DRAFT',
            'RECEIVED',
            'APPROVED',
            'PAID',
            'PARTIALLY_PAID',
            'OVERDUE',
            'CANCELLED',
            'REFUNDED',
          ],
        },
        validationRules,
      ),
    );
  }
}
