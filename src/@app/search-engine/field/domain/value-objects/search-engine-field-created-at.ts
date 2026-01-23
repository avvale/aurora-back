import {
  DataValueObject,
  TimestampValueObject,
  ValidationRules,
} from '@aurorajs.dev/core';

export class SearchEngineFieldCreatedAt extends TimestampValueObject {
  public readonly type: string = 'SearchEngineFieldCreatedAt';

  constructor(
    value: string | DataValueObject,
    validationRules: ValidationRules = {},
    data: DataValueObject = {},
  ) {
    super(
      value,
      Object.assign(
        {
          name: 'SearchEngineFieldCreatedAt',
          nullable: true,
          undefinable: true,
        },
        validationRules,
      ),
      data,
    );
  }
}
