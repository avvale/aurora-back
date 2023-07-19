import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyResourceId extends UuidValueObject
{
    public readonly type: string = 'AttachmentFamilyResourceId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyResourceId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}