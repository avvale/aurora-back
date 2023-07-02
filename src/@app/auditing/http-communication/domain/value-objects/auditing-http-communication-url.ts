import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class AuditingHttpCommunicationUrl extends StringValueObject
{
    public readonly type: string = 'HttpCommunicationUrl';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'HttpCommunicationUrl',
            nullable   : false,
            undefinable: false,
            maxLength  : 2048,
        }, validationRules));
    }
}