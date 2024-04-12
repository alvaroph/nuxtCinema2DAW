import express from 'express';
import cors from 'cors';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
//Permetem que el servidor pugui rebre peticions de qualsevol origen
app.use(cors());

//Creem el servidor de Socket.io especificant que pot accedir qualsevol client
const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: '*', // Replace with the actual origin of your client application
    methods: ['GET', 'POST'],
  }
});

let users = [];
io.on('connection', (socket) => {
console.log("se ha conectado alguien")
  socket.on('unirPartida', (username) => {
    // Leer el archivo JSON
    users.push(username);
    console.log("se ha unido un usuario" + socket.id + " " + username)
    console.log(users)
    socket.emit('peticionRecibida',{'username':username, 'tipo':users.length==1?"administrador":'usuario'} );
    io.emit('actualizacionUsuarios',users);

    //Empieza la partida si hay dos jugadores
     if (users.length==2){
      io.emit('empezarCuentaAtras',users);
     
          let timer = 10;
          let idTimer=setInterval(() => {
            io.emit('cuentaAtras',timer);
            timer--;
            if (timer==0){
              io.emit('empezarPartida',users);
              clearInterval(idTimer);
            }
          }, 1000);
      }
    });

    socket.on('resetPartida', () => {
      // Leer el archivo JSON
      users= [];
      console.log("se ha reseteado la partida")
      io.emit('actualizacionUsuarios',users);
      });
  });

server.listen(3789, () => {
  console.log('Server running at http://localhost:3789');
});
