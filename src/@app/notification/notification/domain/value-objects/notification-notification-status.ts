import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationStatus extends EnumValueObject
{
    public readonly type: string = 'NotificationNotificationStatus';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationStatus',
            nullable   : false,
            undefinable: false,
            enumOptions: ['DRAFT','PENDING','SENT'],
        }, validationRules));
    }
}