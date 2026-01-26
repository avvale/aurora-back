/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalBusinessPartnerMeta extends JsonValueObject {
  public readonly type: string = 'BusinessPartnerPortalBusinessPartnerMeta';

  constructor(value: any, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalBusinessPartnerMeta',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
    );
  }
}
