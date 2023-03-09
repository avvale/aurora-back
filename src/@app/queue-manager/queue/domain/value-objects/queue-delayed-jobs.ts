import { IntValueObject, ValidationRules } from '@aurora-ts/core';

export class QueueDelayedJobs extends IntValueObject
{
    public readonly type: string = 'QueueDelayedJobs';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'QueueDelayedJobs',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}