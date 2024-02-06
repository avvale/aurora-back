import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationSubject extends StringValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationSubject';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationSubject',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}