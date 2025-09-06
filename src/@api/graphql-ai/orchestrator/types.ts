export enum STEP
{
    LLM        = 'LLM',
    VALIDATOR  = 'VALIDATOR',
    COMPOSER   = 'COMPOSER',
    EQUIVALENCE= 'EQUIVALENCE',
    OPERATOR   = 'OPERATOR',
    EXECUTOR   = 'EXECUTOR',
    RESPONSE   = 'RESPONSE',
}

export enum STATUS
{
    DONE = 'DONE',
    ERROR = 'ERROR'
}

export enum MODEL
{
    GPT_5 = 'gpt-5',
    GPT_5_MINI = 'gpt-5-mini',
    GPT_5_NANO = 'gpt-5-nano',
    GPT_4_1 = 'gpt-4.1',
    GPT_4_1_MINI = 'gpt-4.1-mini',
    GPT_4_1_NANO = 'gpt-4.1-nano',
    GPT_4O = 'gpt-4o',
    O3 = 'o3',
    O4_MINI = 'o4-mini',
}

export interface RequestEnvelope
{
    history: string[];
    request: {
        step: STEP;
        targetStep?: STEP;
        status: STATUS;
        error?: string;
    };
    llm?: any;   // raw LLM structure (user language)
    query?: any; // Sequelize-like structure (still using user field/operator names)
    operationName?: string; // GraphQL operation resolved by Equivalence
    result?: any; // payload after EXECUTOR
}