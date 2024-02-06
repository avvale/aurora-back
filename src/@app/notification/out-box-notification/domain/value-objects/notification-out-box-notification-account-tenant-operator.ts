import { EnumValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationOutBoxNotificationAccountTenantOperator extends EnumValueObject
{
    public readonly type: string = 'NotificationOutBoxNotificationAccountTenantOperator';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationOutBoxNotificationAccountTenantOperator',
            nullable   : true,
            undefinable: true,
            enumOptions: ['AND','OR'],
        }, validationRules));
    }
}