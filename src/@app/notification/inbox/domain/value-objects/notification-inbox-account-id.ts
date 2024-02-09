import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxAccountId extends UuidValueObject
{
    public readonly type: string = 'NotificationInboxAccountId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxAccountId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}