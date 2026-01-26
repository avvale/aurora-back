/**
 * @aurora-generated
 * @source cliter/business-partner-portal/sales-invoice-header.aurora.yaml
 */
import {
  DataValueObject,
  DateValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate extends DateValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate';

  constructor(
    value: string | DataValueObject,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSalesInvoiceHeaderInvoiceDate',
          nullable: false,
          undefinable: false,
        },
        validationRules,
      ),
      data,
    );
  }
}
