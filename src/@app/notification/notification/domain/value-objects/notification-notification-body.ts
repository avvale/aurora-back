import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationBody extends StringValueObject
{
    public readonly type: string = 'NotificationNotificationBody';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationBody',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}