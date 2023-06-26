import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionNumMemoryShards extends SmallintValueObject
{
    public readonly type: string = 'CollectionNumMemoryShards';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'CollectionNumMemoryShards',
            nullable   : true,
            undefinable: true,
            maxLength  : 5,
            unsigned   : true,
        }, validationRules));
    }
}