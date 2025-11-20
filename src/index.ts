import exspress, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import router from './router';
import { initializeDefaultData } from './defaultData';

const app: Application = exspress();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/parkometer_db').then(() => {
  console.log('Connected to MongoDB');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}).catch((error) => {
  console.error(error);
});

initializeDefaultData();

app.use('/', router);