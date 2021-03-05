import React from 'react'
import { run, App, Request, Listen } from './mod.js'

const Hello = ({res}) => (res.json({hello: 'world'}), null)

run(
  <App>
    <Request path="/">
      <Hello />
    </Request>
    <Listen port={3000} />
  </App>
)
