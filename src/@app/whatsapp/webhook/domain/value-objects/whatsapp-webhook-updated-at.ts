import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class WhatsappWebhookUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'WhatsappWebhookUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'WhatsappWebhookUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}