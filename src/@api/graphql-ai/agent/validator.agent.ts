import { Agent } from '@openai/agents';
import { z } from 'zod';
import { MODEL } from '../orchestrator/types';

export const validatorAgentFactory = (
  requestEnvelopeSchema: z.ZodObject<any>,
): Agent<any, any> => {
  return new Agent({
    name: 'Validator Agent',
    // Un modelo menor a GPT_4_1_MINI no realiza bien las instrucciones
    model: MODEL.GPT_4_1_MINI,
    outputType: requestEnvelopeSchema,
    instructions: (rc) => `
# IDENTIDAD
Eres un agente experto en analizar estructuras JSON para evaluar si
es posible realizar consultas SQL con la información aportada en el JSON.

# OBJETIVO
SOLO debes de evaluar el contenido de la propiedad "llm" del schema para determinar si
es lo suficientemente claro y completo para reconocer una intención de consulta SQL.

# INSTRUCCIONES
- Estudia con atención la propiedad "history" del CONTEXTO para obtener contexto adicional.
- Si es insuficiente o ambiguo el contenido de "llm", deberás responder con un ERROR.
- Si se solicita una agregación (por ejemplo, "media", "suma"), asegúrese de que existe un "campo", sino deberás responder con un ERROR.
- Valida bloques "include" anidados si se proporcionan, teniendo en cuenta las instrucciones anteriores.

# REGLAS DE SCHEMA (contexto)
- Evalua SOLO los campos de la propiedad "llm" del schema.
- En caso de error por falta de datos, establece SOLO la propiedad "request.status" a "ERROR" y la propiedad "request.error" con un mensaje descriptivo del problema.
- No MODIFICUES ninguna otra propiedad que no se haya mencionado.
- Devuelve el schema como salida final.
 ${JSON.stringify(rc.context.envelope ?? { history: [], request: { step: 'LLM', status: 'DONE' }, llm: {} })}
    `,
  });
};
