import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxId extends UuidValueObject
{
    public readonly type: string = 'NotificationInboxId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}