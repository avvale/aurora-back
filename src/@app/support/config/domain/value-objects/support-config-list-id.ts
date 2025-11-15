import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SupportConfigListId extends StringValueObject {
    public readonly type: string = 'SupportConfigListId';

    constructor(value: string, validationRules: ValidationRules = {}) {
        super(
            value,
            Object.assign(
                {
                    name: 'SupportConfigListId',
                    nullable: true,
                    undefinable: true,
                    maxLength: 255,
                },
                validationRules,
            ),
        );
    }
}
