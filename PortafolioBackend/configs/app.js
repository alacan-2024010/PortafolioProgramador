'use strict';

import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { corsOptions } from './cors-configuration.js';

const BASE_PATH = '/portafolio/v1';

export const initApp = () => {
  const app = express();

  app.use(express.json());
  app.use(cors(corsOptions));
  app.use(helmet());
  app.use(morgan('dev'));

  app.get(`${BASE_PATH}/health`, (req, res) => {
    res.status(200).json({
      status: 'Healthy',
      service: 'Portafolio API funcionando',
      timestamp: new Date().toISOString(),
    });
  });

  return app;
};