import { App, Listen, Request, run, Use } from "zap";

const Hello = (props) => (props.res.json({ hello: "world" }), null);

run(
  <App>
    <Request path="/">
      <Hello />
    </Request>
    <Listen port={3000} />
  </App>,
);
