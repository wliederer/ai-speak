# ai-speak

Profanity filter, based on woke api chat gpt interpretations.

PS - this package is ongoing testing playground.

## Installation

```

// npm
npm install ai-speak

```

## Example usage for npm

```javascript
import { aiJudgement } from 'ai-speak';

await aiJudgement(
  process.env.CHAT_GPT_MODEL,
  process.env.API_KEY,
  'Tom brady is not the best quarterback'
)
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
```

## Responses

if chatGPT believes the string needs to be censored it will return its reasoning

```
'Censor, followed by reasoning'
```

otherwise respond with false

```
'false'
```
