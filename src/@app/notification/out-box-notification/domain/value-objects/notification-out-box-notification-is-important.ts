import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationIsImportant extends BooleanValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationIsImportant';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationIsImportant',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}