require('./conf/conexionbd');
const express = require('express')
const port = (process.env.port || 3000);
const app = express();

const cors = require ('cors');

var corsoption = {origin:["http://localhost:4200"]}
app.use(cors(corsoption))

app.use(express.json());
app.use(express.urlencoded ({extended: true}))
app.set('port',port); //puerto a utilizar
app.listen(app.get('port')); //listo para escuchar el puerto
console.log('servidor iniciado en el prueto: '+port);

app.use('/api',require('./conf/routs/rutas'))


