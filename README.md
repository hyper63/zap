# README

`zap` a react web server framework built on top of opine. This server framework, lets you 
create APIs using react for the server.

``` js
import React from 'react'
import { run, App, Request, Use } from 'zap'

const Hello = ({req, res}) => (res.json({hello: 'world'}), null)

run(
  <App>
    <Request path="/">
      <Hello />
    </Request>
    <Listen port={3000} />
  </App>
)
```

In Deno, create an import_map.json file

``` json
{
  "imports": {
    "react": "https://cdn.skypack.dev/react?dts",
    "zap": "https://x.nest.land/zap@0.0.1/mod.js"
  }
}
```





