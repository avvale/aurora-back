/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { DecimalValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentOcrConfidenceScore extends DecimalValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentOcrConfidenceScore';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentOcrConfidenceScore',
          nullable: true,
          undefinable: true,
          decimals: [5, 2],
          unsigned: false,
        },
        validationRules,
      ),
    );
  }
}
