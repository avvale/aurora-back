/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentRetryCount extends SmallintValueObject {
  public readonly type: string =
    'BusinessPartnerPortalSupplierDocumentRetryCount';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentRetryCount',
          nullable: false,
          undefinable: false,
          unsigned: true,
        },
        validationRules,
      ),
    );
  }
}
