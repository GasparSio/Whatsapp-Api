import OpenAI from 'OpenAI';

export const getMessageOpenAi = async (text) => {
    const openai = new OpenAI({
        apiKey: process.env.OPEN_API_KEY_FLIPO
    });
    const response = await openai.chat.completions.create({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: 'Eres un analista de conversaciones de WhatsApp.' },
          { role: 'user', content: conversationText }
        ]
      });
    if(response.status === 200 && response.data.choices.length > 0){
        return response.data.choices[0].text;
    }
    return null
}