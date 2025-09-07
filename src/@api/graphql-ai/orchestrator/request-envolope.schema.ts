import { z } from 'zod';

export const requestEnvelopeSchema = (): z.ZodObject<any> =>
{
    const primitiveValue = z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.date(),
    ]);

    // sequential operator like json object
    const operatorObject: z.ZodType<any> = z.record(
        z.string(),
        z.union([primitiveValue, z.array(primitiveValue)]),
    );

    // where field: can be
    // - a direct primitive value
    // - an object with operators
    // - an array of OR/AND conditions
    const whereSchema: z.ZodType<any> = z.record(
        z.string(), // nombre del campo
        z.union([
            primitiveValue,
            operatorObject,
            z.array(z.union([primitiveValue, operatorObject])),
        ]),
    );

    // Zod schemas (with recursive include)
    const JsonValue: z.ZodType<any> = z.lazy(() => z.union([
        z.string(),
        z.number(),
        z.boolean(),
        z.null(),
        z.array(z.lazy(() => JsonValue)),
        z.record(z.lazy(() => JsonValue)),
    ]));

    const LLM: z.ZodType<any> = z.lazy(() => z.object({
        table     : z.string(),
        attributes: z.array(z.string()).nullable().optional(),
        order     : z.array(z.array(z.string())).nullable().optional(),
        where     : z.string(),
        include   : z.lazy(() => LLM).nullable().optional(),
        format    : z.enum(['excel', 'json', 'text']).nullable().optional(),
    }).strict());

    return z.object({
        history: z.array(z.string()),
        request: z.object({
            step      : z.literal('LLM'),
            targetStep: z.enum(['LLM', 'VALIDATOR', 'COMPOSER', 'EQUIVALENCE', 'OPERATOR', 'EXECUTOR', 'RESPONSE']).nullable().optional(),
            status    : z.enum(['DONE', 'ERROR']),
            error     : z.string().nullable().optional(),
        }).strict(),
        llm  : LLM,
        query: JsonValue.optional(),
    }).strict();
};
