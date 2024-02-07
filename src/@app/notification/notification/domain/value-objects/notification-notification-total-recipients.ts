import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationTotalRecipients extends IntValueObject
{
    public readonly type: string = 'NotificationNotificationTotalRecipients';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationTotalRecipients',
            nullable   : false,
            undefinable: false,
            unsigned   : true,
        }, validationRules));
    }
}