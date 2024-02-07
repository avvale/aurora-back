import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationAccountIds extends JsonValueObject
{
    public readonly type: string = 'NotificationNotificationAccountIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationAccountIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}