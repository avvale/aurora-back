import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSubject extends StringValueObject
{
    public readonly type: string = 'NotificationInboxSubject';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSubject',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}