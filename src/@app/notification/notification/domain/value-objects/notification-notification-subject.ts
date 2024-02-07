import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationSubject extends StringValueObject
{
    public readonly type: string = 'NotificationNotificationSubject';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationSubject',
            nullable   : false,
            undefinable: false,
            maxLength  : 255,
        }, validationRules));
    }
}