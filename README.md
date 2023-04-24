# Abstraction

## Setup

### Requirements

- [NodeJS](https://nodejs.org/) (built with NodeJS 18)
- [pnpm](https://pnpm.io/) (built with pnpm 7)

### Installation and build

```sh
pnpm install
pnpm build
pnpm start
```

## Task

We are now using two new companies for tracking data in our applications:

- Oakom
- Shadecast

Their SDK works differently, we need to be able to use the two systems and maybe switch between them.  
Create "something" so that we can use the two tracking systems in our applications in an abstracted manner.

### Oakom event

```ts
import { oakom } from 'oakom';

oakom.init('oakcom-client-secret-123');

oakom.startSession();

oakom.sendEvent({
    id: '123456',
    timestamp: 1682327354838,
    name: 'cta-click',
    platform: 'ctv',
    version: '1.0.0',
    data: {
        customData: 'anything',
        device: 'amazonfiretv',
        screen: 'homepage',
        user: 'user-id'
    }
});
```

### Shadecast event

```ts
import { shadecast } from 'shadecast';

await shadecast.configure({
    token: 'shadecast-client-secret-123',
    apiVersion: '2014-10-01',
    platform: 'ctv.amazonfiretv',
    version: '1.0.0'
});

shadecast.report({
    sessionId: 'session-id',
    date: '2023-04-24T09:19:10.700Z',
    name: 'cta-click',
    screenId: 123,
    data: {
        customData: 'anything',
        user: 'user-id'
    }
});
```
