import { ToolsCreateProcedureTemplateInput, ToolsProcedureType } from '@api/graphql';

export const procedures: ToolsCreateProcedureTemplateInput[] = [
    /* {
        id      : '1cd0c79e-b83b-4ebf-b112-063669703cdc',
        name    : 'insertar_usuario',
        type    : ToolsProcedureType.PROCEDURE,
        version : 'v1.1.7',
        sort    : 1,
        upScript: `
CREATE OR REPLACE PROCEDURE insertar_usuario(nombre_input VARCHAR, edad_input INTEGER)
LANGUAGE plpgsql
AS $$
BEGIN
    INSERT INTO usuarios (nombre, edad)
    VALUES (nombre_input, edad_input);
END;
$$;
        `,
        downScript: `
DROP PROCEDURE insertar_usuario(VARCHAR, INTEGER);
        `,
    }, */
];