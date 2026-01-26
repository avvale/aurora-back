/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentNotes extends StringValueObject {
  public readonly type: string = 'BusinessPartnerPortalSupplierDocumentNotes';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentNotes',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
