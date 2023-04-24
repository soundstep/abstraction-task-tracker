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

We are now using two new companies for tracking data in our client-side applications:

- Oakom
- Shadecast

Their SDK works differently, we need to be able to use the two libraries, switch between them, but we will never use both at the same time.

Create a new [API](https://en.wikipedia.org/wiki/API), in terms of client code / interface (not a backend API), so that we can use the two external tracking libraries in our applications in a manner that is using the [abstraction principle](https://en.wikipedia.org/wiki/Abstraction_principle_(computer_programming)).

See the [src/index.ts](./src/index.ts) file for a "usage" with the libraries directly, this code is only there to show that the libraries can be used, everything can be removed.

Requirements:

- must work
- must be written in typescript
- must be strongly-typed

Notes:

- Everything can be done in one file if you wish, the direction and programming concepts are important, not the file structure.

### Oakom event

```ts
import { oakom } from 'oakom';

oakom.init('oakcom-client-secret-123');

const session = oakom.startSession();

session.sendEvent({
    id: '123456',
    name: 'cta-click',
    timestamp: 1682327354838,
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

shadecast.report('session-id', { // session-id can be any string (value is not relevant)
    id: 'cta-click',
    date: '2023-04-24T09:19:10.700Z',
    screenId: 123,
    data: {
        customData: 'anything',
        user: 'user-id'
    }
});
```
