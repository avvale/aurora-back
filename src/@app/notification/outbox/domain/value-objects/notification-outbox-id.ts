import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutboxId extends UuidValueObject
{
    public readonly type: string = 'NotificationOutboxId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutboxId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}