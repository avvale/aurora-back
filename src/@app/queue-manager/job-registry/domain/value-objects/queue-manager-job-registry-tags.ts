import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class QueueManagerJobRegistryTags extends JsonValueObject
{
    public readonly type: string = 'JobRegistryTags';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'JobRegistryTags',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}