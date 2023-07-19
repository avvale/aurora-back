import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'AttachmentFamilyCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}