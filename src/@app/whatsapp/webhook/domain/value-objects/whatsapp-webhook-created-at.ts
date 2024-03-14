import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class WhatsappWebhookCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'WhatsappWebhookCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'WhatsappWebhookCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}