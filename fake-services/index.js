const express = require('express');
const app = express();
const routes = require('./routes');

const port = process.env.APOLLO_FAKE_SERVICES_PORT || 5000;

app.use('/loans', routes.loans);

app.listen(port, () => {
  console.log(`Fake services started and server listening on ${port}`);
});
