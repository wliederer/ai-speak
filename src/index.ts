import axios from 'axios';

export function multiply(a: number, b: number) {
  return a * b;
}

function buildPrompt(content: string) {
  return [
    {
      role: 'system',
      content:
        'You will be provided with a string and will evaluate it for hate speech or bad words and will decide if it needs to be censored.  If the conent needs to be censored return a string with your reasoning otherwise respond with false',
    },
    { role: 'user', content: content },
  ];
}

export async function aiJudgement(
  chatGptModel: string,
  apiKey: string,
  content: string
) {
  const prompt = buildPrompt(content);
  return await axios
    .post(
      'https://api.openai.com/v1/chat/completions',
      { model: chatGptModel, messages: prompt },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
    .then((res: any) => res.data.choices[0].message.content)
    .catch((err: any) => err.response.data.error);
}
