import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'AttachmentFamilyUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}