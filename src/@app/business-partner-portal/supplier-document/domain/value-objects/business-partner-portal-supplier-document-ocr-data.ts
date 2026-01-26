/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentOcrData extends JsonValueObject {
  public readonly type: string = 'BusinessPartnerPortalSupplierDocumentOcrData';

  constructor(value: any, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentOcrData',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
