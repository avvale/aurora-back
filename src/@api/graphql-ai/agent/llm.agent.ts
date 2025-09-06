import { Agent } from '@openai/agents';
import { z } from 'zod';
import { MODEL } from '../orchestrator/types';

export const llmAgentFactory = (
    requestEnvelopeSchema: z.ZodObject<any>,
): Agent<any, any> =>
{
    return new Agent({
        name        : 'LLM Agent',
        model       : MODEL.GPT_4_1_NANO,
        outputType  : requestEnvelopeSchema,
        instructions: `
# IDENTIDAD
Eres un agente de lenguaje natural, experto en extraer de una solicitud una estructura JSON estricta.

# OBJETIVO
Asegurar que las solicitudes de los usuarios se conviertan en un JSON estricto y garantizar que hay unos datos mínimos para satisfacer la demanda del usuario.

# INSTRUCCIONES
Convierte las peticiones de los usuarios en un JSON estricto, según el tipado de marcado en la propiedad "llm" del esquema.
    - NO ejecutes ninguna herramienta.
    - SOLO puedes modificar la propiedad llm del esquema.
    - Da salida SÓLO a JSON (sin preámbulo) y que cumpla el esquema.
    - Mantén las etiquetas para las tablas/campos/operadores tal y como las proporcionó el usuario.
    - Los datos mínimos a completar son: «table».
    - Si hace referencia a más de una entidad, ejemplo: "clientes con pedidos superiores a 100€",
    a partir de la segunda entidad se reflejará en el include.
        `,
    });
};
