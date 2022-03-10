const express = require ("express"); 
const compression = require('compression')
const app = express(); 
require('dotenv').config()

const MongoClient = require("./db/mongoDB");
let clientDb = new MongoClient();
clientDb.connect();
let { loggerInfo } = require('./logs/logs');
const ProductoDaoFactory = require('./dao/productosDaoFactory');
const productoDaoFactory = new ProductoDaoFactory();


const PORT = process.env.PORT;

app.use(compression())


//--------------Cluster

let cluster = require('cluster');
let numCPUs = require('os').cpus().length;
const modoCluster = process.argv[2] == 'CLUSTER'

// Master/Primary
if (modoCluster && cluster.isMaster) {
    loggerInfo.info(`Master ${process.pid} is running`);

    for (let index = 0; index < numCPUs; index++) {
        cluster.fork();
    }
    cluster.on("exit", (worker) =>
        loggerInfo.info(`Worker ${worker.process.pid} died`)
    );
} else {

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 


//! node index.js --cmd agregar --nombre "regla" --precio "10" --stock "10" - example of cmd
productoDaoFactory.handlerCommand()

app.listen(PORT, () => {
    loggerInfo.info(`Server on http://localhost:${PORT} || PID: ${process.pid}`);
});

}


