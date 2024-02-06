import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationBody extends StringValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationBody';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationBody',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}