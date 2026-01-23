import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionAlias extends StringValueObject {
  public readonly type: string = 'SearchEngineCollectionAlias';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'SearchEngineCollectionAlias',
          nullable: true,
          undefinable: true,
          maxLength: 255,
        },
        validationRules,
      ),
    );
  }
}
