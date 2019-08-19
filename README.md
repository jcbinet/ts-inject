# @jcbinet/ts-inject

Basic dependency injection for TypeScript.

## Getting Started
Install the package using npm:

```
npm i @jcbinet/ts-inject
```
### Example

To automatically inject dependency into your classes, you need to mark them with the `@Injectable()` decorator. 

By example, here the `WebSocketService, HttpService` will be automatically injected into `API`.
```typescript
import { Injectable, Injector } from '@jcbinet/ts-inject';

const api = Injector.resolve<API>(API);

@Injectable()
export class API {
  constructor(private http: HttpService,
              private ws: WebSocketService) { }
  
  /** ... */
}
```

