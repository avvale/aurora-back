import { JsonValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilySizes extends JsonValueObject
{
    public readonly type: string = 'AttachmentFamilySizes';

    constructor(value: any, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilySizes',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}