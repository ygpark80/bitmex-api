# BitMEX JavaScript API connector written with TypeScript

This library is an unofficial BitMEX JavaScript API connector written with TypeScript
based on [`bitmex-node`](https://github.com/IlanFrumer/BitMEX-nodejs)
with some minor changes to get it to work on the React Native platform.
Specifically, `request` and `crypto` was replaced with `axios` and `crypto-js`.

## Installation

```
yarn add bitmex-api
```
  
##  Code Example

```typescript
import { BitmexAPI } from "@ygpark80/bitmex-api"

const api = new BitmexAPI({
    "apiKeyID": "<YOUR-API-KEY-ID>",
    "apiKeySecret": "<YOUR_API-KEY-SECRET>"
)

async function () {
    const channels = await api.Chat.getChannels()
    console.log(channels)
}()
```

## Donate

> (BTC) 3CqWS3pjhHZM7gLeNaqxAvwV84EGmtr4vX
