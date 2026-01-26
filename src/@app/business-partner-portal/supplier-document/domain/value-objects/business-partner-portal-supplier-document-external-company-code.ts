/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentExternalCompanyCode extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentExternalCompanyCode';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentExternalCompanyCode',
          nullable: true,
          undefinable: true,
          maxLength: 16,
        },
        validationRules,
      ),
    );
  }
}
