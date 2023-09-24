import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyResourceAttachmentFamilyId extends UuidValueObject
{
    public readonly type: string = 'CommonAttachmentFamilyResourceAttachmentFamilyId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'CommonAttachmentFamilyResourceAttachmentFamilyId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}