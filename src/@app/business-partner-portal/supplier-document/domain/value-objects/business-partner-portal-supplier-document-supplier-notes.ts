/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentSupplierNotes extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentSupplierNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentSupplierNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
