import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSettingAccountId extends UuidValueObject
{
    public readonly type: string = 'NotificationInboxSettingAccountId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSettingAccountId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}