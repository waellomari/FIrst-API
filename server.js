require('dotenv').config();
const express = require('express')
const cors = require('cors');



const { checkIfLoggedIn } = require('./middleware/validator');
const userRouter = require('./routes/userRouts')
const productsRouter = require('./routes/productsRoutes')

const cookieParser = require('cookie-parser')


const app = express();

app.use(cors());

const {isEmail} = require('validator');
require('./lib/db');

port = process.env.PORT || 3000;

app.listen(port, ()=> {
    console.log(`server is connected , http://localhost:${port}`)
});

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => res.status(200).send('This is homepage'))
app.use('/user', userRouter)
//app.use('/products', checkIfLoggedIn, productsRouter)
app.use('/products', productsRouter)

/* 
mongoose.connect(process.env.MONGODB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
})
.then((result)=> app.listen(port, ()=> {
    console.log(`server and database connected, http://localhost:${port}`)
}))
.catch((error)=> {
    console.log(error);
    process.exit(1);
});

 */

//const user = mongoose.connection.model('users', userSchema);



