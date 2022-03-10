const mongosee = require("mongoose");
const CustomErr = require("../utils/error");
const Config = require("../config/config");
const { loggerInfo } = require("../logs/logs");

class mongoClient {
    constructor() {
        this.conected = false;
        this.client = mongosee;
    }

    async connect() {
        try {
            await this.client.connect(Config.host + Config.name);
            loggerInfo.info("********* Connected to Database *********");
        } catch (err) {
            throw new CustomErr(500, "Error connecting to mongoDB");
        }
    }

    async disconnect() {
        try {
            await this.client.connection.close();
            loggerInfo.info("********* Database disconected *********");
        } catch (err) {
            throw new CustomErr(500, "Error al conectarse a mongoDB 2");
        }
    }
}

module.exports = mongoClient;
