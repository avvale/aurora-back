import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class WhatsappWebhookDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'WhatsappWebhookDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'WhatsappWebhookDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}