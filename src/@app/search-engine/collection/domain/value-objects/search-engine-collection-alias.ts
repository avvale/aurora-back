import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionAlias extends StringValueObject
{
    public readonly type: string = 'CollectionAlias';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'CollectionAlias',
            nullable   : true,
            undefinable: true,
            maxLength  : 255,
        }, validationRules));
    }
}