import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class OAuthApplicationApplicationClientId extends UuidValueObject
{
    public readonly type: string = 'OAuthApplicationApplicationClientId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'OAuthApplicationApplicationClientId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}