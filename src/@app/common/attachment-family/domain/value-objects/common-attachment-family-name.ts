import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyName extends StringValueObject
{
    public readonly type: string = 'AttachmentFamilyName';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyName',
            nullable   : false,
            undefinable: false,
            maxLength  : 100,
        }, validationRules));
    }
}