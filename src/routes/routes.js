const express = require('express');
const router = express.Router();
const whatsappController = require('../controllers/wtscontroller');
const e = require('express');


router
.get('/', whatsappController.verifyToken)
.post('/', whatsappController.receiveMessage);

export default router;

