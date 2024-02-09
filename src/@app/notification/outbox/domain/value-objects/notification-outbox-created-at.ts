import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'NotificationOutboxCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}