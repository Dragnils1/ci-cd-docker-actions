require("dotenv").config();

// подключение express
const express = require("express");
const cors = require('cors')
const dbConfig = require("./config/db.config.js");
const Sequelize = require("sequelize");


const PORT = process.env.NODE_DOCKER_PORT || 8000;


const app = express();
app.use(cors())

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.port,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
	
	// отправляем ответ
	response.send(`random num: ${Math.floor(Math.random() * 10)}`);
});
// начинаем прослушивать подключения на 3000 порту
app.listen(PORT);