import express from 'express';
import devicesRoutes from './routes/devices.js';
import client from './DB/db_config.js';
import bodyParser from 'body-parser';
const server=express();
const PORT =8000;
server.use(bodyParser.json({extended: false }));
server.use('/device',devicesRoutes);

server.get('/',(request,response)=>response.send('Our API is running ...'));

server.listen(process.env.PORT|| PORT,function (){
    console.log('server started !!');
});