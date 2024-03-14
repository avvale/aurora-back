import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class WhatsappWebhookId extends UuidValueObject
{
    public readonly type: string = 'WhatsappWebhookId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'WhatsappWebhookId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}