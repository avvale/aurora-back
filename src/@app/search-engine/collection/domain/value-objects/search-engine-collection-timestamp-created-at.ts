import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionTimestampCreatedAt extends IntValueObject {
  public readonly type: string = 'SearchEngineCollectionTimestampCreatedAt';

  constructor(value: number, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'SearchEngineCollectionTimestampCreatedAt',
          nullable: true,
          undefinable: true,
          unsigned: true,
        },
        validationRules,
      ),
    );
  }
}
