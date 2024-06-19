import client from "../DB/db_config.js";

const successMessage={
    'status':true,
    'message':'success'
}
const failedMessage={
    'status':false,
    'message':'failed'
}

const getInfo=function(request,response){
    const {device} =request.params;
    client.query(`SELECT temperature,humidity,power FROM devices WHERE device='${device}'`,function(error,result){
        if(error){
            response.json(failedMessage);
        }
        else {
            response.json(result.rows[0]);
        }
    });
};

const updateTemperature=function(request,response){
    const temperature=request.body.temperature;
    const device=request.body.device;
    client.query(`UPDATE devices SET temperature=${temperature} WHERE device='${device}'`,function(error,result){
        if(error){
            console.log(error);
            response.json(failedMessage);
        }
        else{
            response.json(successMessage);
        }
    });
}
const updatePower=function(request,response){
    const power=request.body.power;
    const device=request.body.device;
    client.query(`UPDATE devices SET power=${power} WHERE device='${device}'`,function(error,result){
        if(error){
            console.log(error);
            response.json(failedMessage);
        }
        else{
            response.json(successMessage);
        }
    });
}

export default {getInfo,updateTemperature,updatePower};