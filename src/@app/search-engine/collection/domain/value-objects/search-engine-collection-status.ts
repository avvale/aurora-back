import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionStatus extends EnumValueObject
{
    public readonly type: string = 'CollectionStatus';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'CollectionStatus',
            nullable   : false,
            undefinable: false,
            enumOptions: ['CONSOLIDATED','INDEXING'],
        }, validationRules));
    }
}