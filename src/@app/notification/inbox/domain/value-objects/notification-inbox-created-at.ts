import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationInboxCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}