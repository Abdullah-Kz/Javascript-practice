const {Client} = require('pg')
const client = new Client({
    host : 'localhost',
    user : 'postgres',
    port : 5432,
    password : '*#akz203',
    database : 'postgres'
})
client.connect();
client.query(`SELECT * from cars`, (err, res) => {
if(!err){
        console.table(res.rows);
}else{
    console.log(`Error : ${err}`);
}
client.end();
});