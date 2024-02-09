import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSettingId extends UuidValueObject
{
    public readonly type: string = 'NotificationInboxSettingId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSettingId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}