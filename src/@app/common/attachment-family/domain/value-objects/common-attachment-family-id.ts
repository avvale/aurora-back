import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyId extends UuidValueObject
{
    public readonly type: string = 'AttachmentFamilyId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}