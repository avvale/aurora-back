import { IntValueObject, ValidationRules } from '@aurora-ts/core';

export class QueueFailedJobs extends IntValueObject
{
    public readonly type: string = 'QueueFailedJobs';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'QueueFailedJobs',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}