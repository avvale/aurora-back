import { IntValueObject, ValidationRules } from '@aurora-ts/core';

export class QueuePausedJobs extends IntValueObject
{
    public readonly type: string = 'QueuePausedJobs';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'QueuePausedJobs',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}