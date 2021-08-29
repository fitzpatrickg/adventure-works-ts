import express from 'express';
import db from './database/database.config';
import router from './router/router';

const app = express();
const port = 8081;

app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  db.sync()
    .then(() => {
      console.log('connected to db');
    });
  console.log(`server is running on port ${port}`);
});
