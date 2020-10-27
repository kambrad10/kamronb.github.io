const express = require('express');
const cors = require('cors');
// const dotenv = require('.dotenv').config(); // access the environment
const { log } = require('console');

const app = express();


app.use(cors());

const port = process.env.port || 1200;
app.listen(port, (req, res) => {
    // if port exist in-which it does...
    if(port){
        return port ? log(port) : {};
    }else{
        switch(port){
            case 1200:
                var Type = typeof port;
                log(`${Type}: ${port}`);
                break;
                default: {
                    log(`${port} doesn't exist`)
                }
        }

    }
})

//if ^ is a success ? type 'node' { file-type: file-type } inside terminal : exit.