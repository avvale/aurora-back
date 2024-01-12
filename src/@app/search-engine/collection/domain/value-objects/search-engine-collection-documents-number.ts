import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionDocumentsNumber extends IntValueObject
{
    public readonly type: string = 'SearchEngineCollectionDocumentsNumber';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineCollectionDocumentsNumber',
            nullable   : true,
            undefinable: true,
            unsigned   : true,
        }, validationRules));
    }
}