import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SearchEngineCollectionTimestampCreatedAt extends IntValueObject
{
    public readonly type: string = 'CollectionTimestampCreatedAt';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'CollectionTimestampCreatedAt',
            nullable   : true,
            undefinable: true,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}