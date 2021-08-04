const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');

const route = require('./routes');
const db = require('./config/db');

//Connect DB
db.connect();

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

//middleware - apply body
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json()); //Use for fetch, axios

//http logger
app.use(morgan('combined'));

app.use(methodOverride('_method'));

//Template engine
app.engine(
    'hbs',
    handlebars({
        //Edit extension file name (.hbs instead of .handlebars)
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b
        }
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
