import { z } from 'zod';
import { RequestEnvelope } from './types';

export const requestEnvelopeSchema = (): z.ZodObject<any> =>
{
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
        table   : z.string(),
        field   : z.string().nullable().optional(),
        operator: z.string().nullable().optional(),
        value   : JsonValue.optional(),
        range   : z.string().nullable().optional(),
        format  : z.enum(['excel', 'json', 'text']).nullable().optional(),
        include : z.lazy(() => LLM).nullable().optional(),
    }).strict());

    return z.object({
        history: z.array(z.string()),
        request: z.object({
            step      : z.literal('LLM'),
            targetStep: z.enum(['LLM', 'VALIDATOR', 'COMPOSER', 'EQUIVALENCE', 'OPERATOR', 'EXECUTOR', 'RESPONSE']).nullable().optional(),
            status    : z.enum(['DONE', 'ERROR']),
            error     : z.string().nullable().optional(),
        }).strict(),
        llm: LLM,
    }).strict();
};
