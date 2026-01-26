/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentFile extends JsonValueObject {
  public readonly type: string = 'BusinessPartnerPortalSupplierDocumentFile';

  constructor(value: any, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentFile',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
