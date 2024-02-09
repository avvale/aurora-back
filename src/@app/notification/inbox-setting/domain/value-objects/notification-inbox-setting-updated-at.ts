import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSettingUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationInboxSettingUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSettingUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}