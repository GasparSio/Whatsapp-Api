import express from 'express';
import whatsappController from '../controllers/wtscontroller.js';

const routerApi = express.Router();

routerApi
  .get('/', whatsappController.verifyToken)
  .post('/', whatsappController.receiveMessage);

export default routerApi;
