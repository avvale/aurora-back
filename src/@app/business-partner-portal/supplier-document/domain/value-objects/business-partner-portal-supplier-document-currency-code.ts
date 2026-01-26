/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentCurrencyCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentCurrencyCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentCurrencyCode',
          nullable: true,
          undefinable: true,
          length: 3,
        },
        validationRules,
      ),
    );
  }
}
