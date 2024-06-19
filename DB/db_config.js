import Db from 'pg';
const client=new Db.Pool({
    connectionString:"postgres://ssbgbojfhomyhy:9ead842ba49312344219a434b46fb3aadd6835a1b6605c02ae90acc8ba4d7e9d@ec2-52-48-159-67.eu-west-1.compute.amazonaws.com:5432/df699m6tv0e9a7",
    ssl: { rejectUnauthorized: false }
});

client.connect(function(err){
    if(err)console.log('Unable to Connect DB ...');
    else console.log("DB connected !!");
});

export default client;