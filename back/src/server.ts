import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import io, { Socket } from 'socket.io'
import fs from 'fs';
import moment from 'moment'

dotenv.config()



const port = process.env.PORT
const app = express()
const display = (str: string): void => console.log(`[${moment()}] ${str}`)

app.get('/', function (req, res) {
  res.send('<h1>le serveur tourne </h1>');
});

const server = app.listen(port, () => {
  display(chalk.magenta(` Le serveur tourne sur localhost:${port}`))
});

const random = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const socket = io(server);
socket.on('connection', function (socket, pseudo) {
  const result: number = random(1, 222);

  const name = JSON.stringify(result, null, 3);
  fs.writeFile('./db/game.json', name, function (err) {
    if (err) return console.log(err);
  });

  socket.emit('sendNumber', result);
  socket.broadcast.emit('message', 'Un autre jouer vient de se connecter ! ');

  socket.on('deconnection', function (pseudo) {
    socket.pseudo = pseudo;
    console.log(' new pseudo:', pseudo);
  });

  socket.on('newMessage', function (message) {
    console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
  });

});


