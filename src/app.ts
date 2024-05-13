import {Server} from "./presentacion/server";

(async()=>{
    main();
})();


async function main (){

    //connect database

    //run server
    const server = new Server();
    server.start();
}