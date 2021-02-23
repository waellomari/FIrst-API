require('dotenv').config();
const express = require('express')



const { addUser, getUser } = require('./controllers/userControls')
const { getProducts, getProduct, addProduct, } = require('./controllers/productControls')
const { checkEmail, checkIfLoggedIn } = require('./middleware/validator');
const userRouter = require('./routes/userRouts')
const productsRouter = require('./routes/productsRoutes')

const cookieParser = require('cookie-parser')


const app = express();

const {isEmail} = require('validator');
require('./lib/db');

port = process.env.PORT || 80;

app.listen(port); 

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.use('/user', checkIfLoggedIn, userRouter);
app.use('/products', checkIfLoggedIn, productsRouter);
