import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationNotificationIsImportant extends BooleanValueObject
{
    public readonly type: string = 'NotificationNotificationIsImportant';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationNotificationIsImportant',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}