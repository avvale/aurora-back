/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import {
  DataValueObject,
  UuidValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId extends UuidValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId';

  constructor(
    value: string,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentPurchaseInvoiceHeaderId',
          nullable: true,
          undefinable: true,
          length: 36,
        },
        validationRules,
      ),
      data,
    );
  }
}
