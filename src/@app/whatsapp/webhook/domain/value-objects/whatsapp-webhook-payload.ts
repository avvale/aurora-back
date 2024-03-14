import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class WhatsappWebhookPayload extends JsonValueObject
{
    public readonly type: string = 'WhatsappWebhookPayload';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'WhatsappWebhookPayload',
            nullable   : false,
            undefinable: false,
        }, validationRules));
    }
}