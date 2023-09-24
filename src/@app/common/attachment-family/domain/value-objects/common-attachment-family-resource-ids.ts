import { UuidArrayValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyResourceIds extends UuidArrayValueObject
{
    public readonly type: string = 'CommonAttachmentFamilyResourceIds';

    constructor(value: string | string[], validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'CommonAttachmentFamilyResourceIds',
            nullable   : true,
            undefinable: true,
        }, validationRules));
    }
}