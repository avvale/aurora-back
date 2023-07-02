import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AuditingHttpCommunicationHttpRequestRejected extends JsonValueObject
{
    public readonly type: string = 'HttpCommunicationHttpRequestRejected';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'HttpCommunicationHttpRequestRejected',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}