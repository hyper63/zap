# README

`zap` a react web server framework built on top of opine. This server framework,
lets you create APIs using react for the server.

```js
import React from "react";
import { App, Request, run, Use } from "zap";

const Hello = ({ req, res }) => (res.json({ hello: "world" }), null);

run(
  <App>
    <Request path="/">
      <Hello />
    </Request>
    <Listen port={3000} />
  </App>,
);
```

In Deno, create an import_map.json file

```json
{
  "imports": {
    "react": "https://cdn.skypack.dev/react?dts",
    "zap": "https://x.nest.land/zap@0.0.3/mod.js"
  }
}
```

## API

### App

Is a wrapper for your application.

```
<App>
  ...
</App>
```

### Use

allows you to use middleware, this middleware must have a `fn` that handles `(req, res, next)`

Props

* path [optional] - the path to run the middleware on, default is '*'
* fn - the middleware function handler

```
<Use fn={jwt} />
```

### Request

Defines the request path for the api.

Props

* path - the request path
* method - the request method to handle


``` jsx
<Request path="/">

</Request>
```

### Listen

the Listen component takes the port the server will listen

``` jsx
<Listen port={3000} />
```

