import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxSettingSort extends IntValueObject
{
    public readonly type: string = 'NotificationInboxSettingSort';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxSettingSort',
            nullable   : false,
            undefinable: false,
            unsigned   : false,
        }, validationRules));
    }
}