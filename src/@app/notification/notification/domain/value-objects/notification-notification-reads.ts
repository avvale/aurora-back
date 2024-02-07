import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationReads extends IntValueObject
{
    public readonly type: string = 'NotificationNotificationReads';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationReads',
            nullable   : false,
            undefinable: false,
            unsigned   : true,
        }, validationRules));
    }
}