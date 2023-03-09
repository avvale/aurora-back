import { IntValueObject, ValidationRules } from '@aurora-ts/core';

export class QueueCompletedJobs extends IntValueObject
{
    public readonly type: string = 'QueueCompletedJobs';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'QueueCompletedJobs',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}