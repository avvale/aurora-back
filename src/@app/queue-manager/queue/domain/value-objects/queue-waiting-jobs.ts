import { IntValueObject, ValidationRules } from '@aurora-ts/core';

export class QueueWaitingJobs extends IntValueObject
{
    public readonly type: string = 'QueueWaitingJobs';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'QueueWaitingJobs',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}