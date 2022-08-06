const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
// const Sequelize = require('sequelize');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const routes = require('./controllers');
const hbs = exphbs.create({});

// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening ${PORT}` ));
});