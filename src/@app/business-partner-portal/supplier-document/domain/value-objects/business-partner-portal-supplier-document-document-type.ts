/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentDocumentType extends EnumValueObject<
  'INVOICE' | 'CREDIT_NOTE' | 'DEBIT_NOTE' | 'PROFORMA' | 'OTHER'
> {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentDocumentType';

  constructor(
    value: 'INVOICE' | 'CREDIT_NOTE' | 'DEBIT_NOTE' | 'PROFORMA' | 'OTHER',
    validationRules: ValidationRules = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentDocumentType',
          nullable: true,
          undefinable: true,
          enumOptions: [
            'INVOICE',
            'CREDIT_NOTE',
            'DEBIT_NOTE',
            'PROFORMA',
            'OTHER',
          ],
        },
        validationRules,
      ),
    );
  }
}
