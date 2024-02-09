import { BooleanValueObject, DataValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxIsImportant extends BooleanValueObject
{
    public readonly type: string = 'NotificationInboxIsImportant';

    constructor(value: boolean, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxIsImportant',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}