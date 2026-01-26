/**
 * @aurora-generated
 * @source cliter/business-partner-portal/supplier-document.aurora.yaml
 */
import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalSupplierDocumentStatus extends EnumValueObject<
  | 'PENDING_UPLOAD'
  | 'UPLOADED'
  | 'VALIDATING'
  | 'SENT_FOR_PROCESSING'
  | 'PROCESSING'
  | 'PROCESSED'
  | 'LINKED'
  | 'ERROR'
  | 'REJECTED'
> {
  public readonly type: string = 'BusinessPartnerPortalSupplierDocumentStatus';

  constructor(
    value:
      | 'PENDING_UPLOAD'
      | 'UPLOADED'
      | 'VALIDATING'
      | 'SENT_FOR_PROCESSING'
      | 'PROCESSING'
      | 'PROCESSED'
      | 'LINKED'
      | 'ERROR'
      | 'REJECTED',
    validationRules: ValidationRules = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalSupplierDocumentStatus',
          nullable: false,
          undefinable: false,
          enumOptions: [
            'PENDING_UPLOAD',
            'UPLOADED',
            'VALIDATING',
            'SENT_FOR_PROCESSING',
            'PROCESSING',
            'PROCESSED',
            'LINKED',
            'ERROR',
            'REJECTED',
          ],
        },
        validationRules,
      ),
    );
  }
}
