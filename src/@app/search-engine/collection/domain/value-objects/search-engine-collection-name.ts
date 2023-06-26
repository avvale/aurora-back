import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionName extends StringValueObject
{
    public readonly type: string = 'CollectionName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'CollectionName',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}