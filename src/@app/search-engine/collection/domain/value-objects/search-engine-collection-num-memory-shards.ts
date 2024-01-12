import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionNumMemoryShards extends SmallintValueObject
{
    public readonly type: string = 'SearchEngineCollectionNumMemoryShards';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'SearchEngineCollectionNumMemoryShards',
            nullable   : true,
            undefinable: true,
            unsigned   : true,
        }, validationRules));
    }
}