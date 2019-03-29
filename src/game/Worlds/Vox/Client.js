
const io = require("socket.io-client");

let socket = io.connect("http://localhost:3000");

console.log("Connecting");
socket.on('connect', ()=>{
    console.log("Connected to Server");
});

socket.on('disconnect', ()=>{
    console.log("Disconnected from Server");
})

socket.on("Event", (data)=>{
    console.log("The Server is ALIVE!");
    console.log(data);
})

//This is a new Character
socket.emit("ClientMsg" , {event: "Login", character: 1, world: 1});
socket.emit("ClientMsg" , {event: "Login", character: 1, world: 1});

