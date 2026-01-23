import {
  BooleanValueObject,
  DataValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class SearchEngineCollectionIsEnableNestedFields extends BooleanValueObject {
  public readonly type: string = 'SearchEngineCollectionIsEnableNestedFields';

  constructor(
    value: boolean,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'SearchEngineCollectionIsEnableNestedFields',
          nullable: false,
          undefinable: false,
        },
        validationRules,
      ),
      data,
    );
  }
}
