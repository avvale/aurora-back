import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionDefaultSortingField extends StringValueObject
{
    public readonly type: string = 'CollectionDefaultSortingField';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'CollectionDefaultSortingField',
            nullable   : true,
            undefinable: true,
            maxLength  : 255,
        }, validationRules));
    }
}