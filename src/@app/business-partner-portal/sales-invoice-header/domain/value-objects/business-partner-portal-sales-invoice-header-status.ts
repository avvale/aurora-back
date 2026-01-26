/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderStatus extends EnumValueObject<
  | 'DRAFT'
  | 'SENT'
  | 'PAID'
  | 'PARTIALLY_PAID'
  | 'OVERDUE'
  | 'CANCELLED'
  | 'REFUNDED'
> {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderStatus';

  constructor(
    value:
      | 'DRAFT'
      | 'SENT'
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
          name: 'BusinessPartnerPortalSalesInvoiceHeaderStatus',
          nullable: false,
          undefinable: false,
          enumOptions: [
            'DRAFT',
            'SENT',
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
