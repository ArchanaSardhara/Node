"use strict";

const config = require("./config");
const server = require("./server");

const startServer = async () => {

    try {

        //create instance of server application
        const app = await server(config);

        //start the web server
        await app.start();

        console.log("app is runnig ....");

    } catch (error) {

        console.log("connection error:", error);
    }

}

startServer();