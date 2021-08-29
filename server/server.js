const express = require('express');

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server is listening on http://localhost:3000');
});
