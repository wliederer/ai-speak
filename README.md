# ai-speak

Profanity filter, based on woke api chat gpt interpretations.

PS - this package is ongoing testing playground.

Coming soon - algorithm for non api profanity filter.

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
