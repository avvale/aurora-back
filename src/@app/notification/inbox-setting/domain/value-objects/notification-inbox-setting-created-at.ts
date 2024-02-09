import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSettingCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationInboxSettingCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSettingCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}