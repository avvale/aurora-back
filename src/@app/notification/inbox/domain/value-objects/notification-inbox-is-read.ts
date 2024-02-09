import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxIsRead extends BooleanValueObject
{
    public readonly type: string = 'NotificationInboxIsRead';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxIsRead',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}