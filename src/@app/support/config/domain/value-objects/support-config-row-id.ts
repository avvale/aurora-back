import { BigintValueObject, ValidationRules } from '@aurorajs.dev/core';

export class SupportConfigRowId extends BigintValueObject {
    public readonly type: string = 'SupportConfigRowId';

    constructor(value: number, validationRules: ValidationRules = {}) {
        super(
            value,
            Object.assign(
                {
                    name: 'SupportConfigRowId',
                    nullable: false,
                    undefinable: false,
                    unsigned: false,
                },
                validationRules,
            ),
        );
    }
}
