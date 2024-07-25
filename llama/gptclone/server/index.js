import express from 'express'
import {createServer} from 'http'
import {Server} from 'socket.io'

const app = express();
const server = createServer(app);

const io = new Server(server)

const PORT = process.env.PORT || 3000;

app.get('/test',(_,res)=>{
    res.send('this is just a test')
})

server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})