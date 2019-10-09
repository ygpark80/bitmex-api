# BitMEX JavaScript API connector written with TypeScript

This library is based on [`bitmex-node`](https://github.com/IlanFrumer/BitMEX-nodejs) with some minor changes to get it to work on the React Native platform. Specifically, `request` and `crypto` was replaced with `axios` and `crypto-js`.

## Installation  

```
yarn add bitmex-api
```
  
##  Code Example

```typescript
import { BitmexAPI } from "bitmex-api";

const bitmex = new BitmexAPI({
    "apiKeyID": "<YOUR-API-KEY-ID>",
    "apiKeySecret": "<YOUR_API-KEY-SECRET>",
    // "proxy": "https://cors-anywhere.herokuapp.com/"
);

async function () {
    const chatMessage = await bitmex.Chat.new({ message: 'Pump incoming !!! ' });
}()
```

## Donate
- (BTC) 1CUjz7EF1iqgJPi3MPW6Nb556tQwPNryM3
