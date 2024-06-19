import express from 'express';
import devicesController from '../controllers/devices.js';
const route=express.Router();

route.get('/:device',devicesController.getInfo);
route.post('/update/temperature',devicesController.updateTemperature);
route.post('/update/power',devicesController.updatePower);

export default route;