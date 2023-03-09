import { IntValueObject, ValidationRules } from '@aurora-ts/core';

export class QueueActiveJobs extends IntValueObject
{
    public readonly type: string = 'QueueActiveJobs';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'QueueActiveJobs',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}