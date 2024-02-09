import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSettingDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationInboxSettingDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSettingDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}