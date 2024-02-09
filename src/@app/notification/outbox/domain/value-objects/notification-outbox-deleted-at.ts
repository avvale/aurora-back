import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationOutboxDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}