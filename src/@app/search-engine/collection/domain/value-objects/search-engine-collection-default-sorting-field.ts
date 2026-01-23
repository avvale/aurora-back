import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionDefaultSortingField extends StringValueObject {
  public readonly type: string = 'SearchEngineCollectionDefaultSortingField';

  constructor(value: string, validationRules: ValidationRules = {}) {
    super(
      value,
      Object.assign(
        {
          name: 'SearchEngineCollectionDefaultSortingField',
          nullable: true,
          undefinable: true,
          maxLength: 255,
        },
        validationRules,
      ),
    );
  }
}
