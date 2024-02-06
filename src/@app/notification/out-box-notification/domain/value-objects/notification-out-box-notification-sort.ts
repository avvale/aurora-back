import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationSort extends IntValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationSort';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationSort',
            nullable   : false,
            undefinable: false,
            unsigned   : false,
        }, validationRules));
    }
}