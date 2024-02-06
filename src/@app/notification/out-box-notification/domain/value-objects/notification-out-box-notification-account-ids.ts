import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationAccountIds extends JsonValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationAccountIds';

    constructor(value: any[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationAccountIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}