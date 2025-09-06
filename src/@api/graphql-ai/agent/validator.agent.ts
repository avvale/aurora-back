import { Agent } from '@openai/agents';
import { MODEL } from '../orchestrator/types';

export const validatorAgentFactory = (): Agent<any, any> =>
{
    return new Agent({
        name        : 'Validator Agent',
        // Un modelo menor a GPT_4_1_MINI no realiza bien las instrucciones
        model       : MODEL.GPT_4_1_MINI,
        instructions: `
# IDENTIDAD
Eres un agente experto en identificación de intenciones.

# OBJETIVO
Debes de evaluar si los datos contenidos en una estructura JSON son lo suficientemente claros
y completos para reconocer una intención de consulta SQL.

# INSTRUCCIONES
- Recibirás por contexto una estructura JSON serializada, que denominaremos CONTEXTO.
- SOLO podrás cambiar la propiedad "request" del CONTEXTO, el resto de propiedades
deben permanecer INMUTABLES.
- APÓYATE en la propiedad "history" del CONTEXTO para obtener contexto adicional.
- SOLO deberás evaluar la propiedad "llm" del CONTEXTO:
    * Si es suficiente, cambia la propiedad "request" del CONTEXTO a:
        "request": {
            "step": "VALIDATOR",
            "status": "DONE"
        },
    * En caso de ERROR, cambia la propiedad "request" del CONTEXTO a:
        "request": {
            "step": "VALIDATOR",
            "status": "ERROR",
            "error": "<razón>",
            "target": "LLM"
        },
    En el campo "<razón>" debes proporcionar información específica del error producido.

    * Si es insuficiente o ambiguo, deberás responder con un ERROR.
    * Si se solicita una agregación (por ejemplo, "media", "suma"), asegúrese de que existe un "campo", sino deberás responder con un ERROR.
    * Valida bloques "include" anidados si se proporcionan, teniendo en cuenta las instrucciones anteriores.
    `,
    });
};
