import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationInboxDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}