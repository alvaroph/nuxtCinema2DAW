import { io } from "socket.io-client";
//import { useGameStore } from '@/store/app';


// "undefined" means the URL will be computed from the `window.location` object
const URL =  "http://alvaro.daw.inspedralbes.cat:3999";
const URLLOCAL = "http://localhost:3789";

export const socket = io(URLLOCAL);

socket.on("connect", () => {
//  state.connected = true;
});

socket.on("disconnect", () => {
//  state.connected = false;
});

socket.on("peticionRecibida", (infouser) => {

  const store = useGameStore();
 // store.setUser(infouser);

});

socket.on("actualizacionUsuarios", (listaUsuarios) => {
  const store = useGameStore();
 // store.setUsers(listaUsuarios);
});

