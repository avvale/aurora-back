import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AuditingHttpCommunicationStatus extends SmallintValueObject
{
    public readonly type: string = 'HttpCommunicationStatus';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'HttpCommunicationStatus',
            nullable   : true,
            undefinable: true,
            maxLength  : 5,
            unsigned   : true,
        }, validationRules));
    }
}