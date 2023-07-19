import { SmallintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class CommonAttachmentFamilyWidth extends SmallintValueObject
{
    public readonly type: string = 'AttachmentFamilyWidth';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'AttachmentFamilyWidth',
            nullable   : true,
            undefinable: true,
            maxLength  : 5,
            unsigned   : true,
        }, validationRules));
    }
}