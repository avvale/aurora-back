import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationInboxUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}