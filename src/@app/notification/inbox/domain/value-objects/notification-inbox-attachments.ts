import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class NotificationInboxAttachments extends JsonValueObject
{
    public readonly type: string = 'NotificationInboxAttachments';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'NotificationInboxAttachments',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}