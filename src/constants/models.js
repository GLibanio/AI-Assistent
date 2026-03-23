//Configuração modelos

export const MODELS = [
    {id: 'nvidia/nemotron-nano-12b-v2-vl:free', label: 'Nemotron Nano 12B 2 VL', shortlabel: 'Nemotron 12B VL'},
    {id: 'arcee-ai/trinity-mini:free', label: 'Arcee Trinity Mini', shortlabel: 'Trinity Mini'},
    {id: 'sourceful/riverflow-v2-pro', label: 'Riverflow V2 Pro', shortlabel: 'Riverflow V2 Pro'},
    {id: 'black-forest-labs/flux.2-klein-4b', label: ' FLUX.2 Klein 4B', shortlabel: ' FLUX.2 Klein 4B'},
    {id: 'z-ai/glm-4.5-air:free', label: 'GLM 4.5 Air ', shortlabel: 'GLM 4.5 Air '},
    {id: 'qwen/qwen3-coder:free', label: 'Qwen3 Coder 480B A35B', shortlabel: 'Qwen3 Coder'},
    {id: 'openai/gpt-oss-120b:free', label: 'OpenAI: gpt 120b', shortlabel: 'OpenAI: gpt'},
    {id: 'google/gemma-3n-e4b-it:free', label: 'Gemma 3n 4B', shortlabel: 'Gemma 3n 4B'},
]


export const VISION_MODEL_IDS = new Set(['z-ai/glm-4.5-air:free', 'nvidia/nemotron-nano-12b-v2-vl:free'])


export const NOVA_FILE_MODEL_ID = 'z-ai/glm-4.5-air:free';