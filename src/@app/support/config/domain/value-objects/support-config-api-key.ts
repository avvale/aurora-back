import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SupportConfigApiKey extends StringValueObject {
    public readonly type: string = 'SupportConfigApiKey';

    constructor(value: string, validationRules: ValidationRules = {}) {
        super(
            value,
            Object.assign(
                {
                    name: 'SupportConfigApiKey',
                    nullable: true,
                    undefinable: true,
                    maxLength: 255,
                },
                validationRules,
            ),
        );
    }
}
