/**
 * @aurora-generated
 * @source cliter/business-partner-portal/business-partner.aurora.yaml
 */
import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BusinessPartnerPortalBusinessPartnerType extends JsonValueObject {
  public readonly type: string = 'BusinessPartnerPortalBusinessPartnerType';

  constructor(value: any[], validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'BusinessPartnerPortalBusinessPartnerType',
          nullable: false,
          undefinable: false,
        },
        validationRules,
      ),
    );
  }
}
