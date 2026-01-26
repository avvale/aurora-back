/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentErrorMessage extends StringValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentErrorMessage';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentErrorMessage',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
