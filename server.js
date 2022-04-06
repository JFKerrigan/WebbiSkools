
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/user');
const check = require('./middlewares/check');
const bcrypt = require('bcryptjs');
const cookieParser = require('cookie-parser');
dotenv.config({ path: './.env' });
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
app.use(express.urlencoded({ extended: false}));
app.use(express.json({ extended: false}));
app.use(cors());
app.use(cookieParser());

// Connecting to the database
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.dbURL)
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error);
    }
} 
connectDB(); 

// Routes
app.get('/', (req, res) => {
    res.send("Inside backend");
});

app.get('/register', (req, res) => {
    res.send("Register test")
});

app.post('/api/register', async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.userPassword, 10);
    try {
        await User.create({
            name: req.body.userName,
            email: req.body.userEmail,
            password: hashedPassword
        });

        res.json({
            message: "User registered"
        });
    } catch (error) {
        console.log(error)
    }
});


app.get('/api/user', check.isLoggedIn, async (req, res) => {
    try {
        const user = req.userFound._id;
        const userDB = await User.findById(user);
    
        res.json({
          name: userDB.name,
          email: userDB.email,
          id: userDB._id,
          message: "User logged in",
        });

    } catch (error) {
        res.json({
          name: 'Guest',
          email: false,
          id: false,
          message: "Not logged in",
    });
    }
});

app.get('/login', (req, res) => {

});
      
app.post('/api/login', async (req, res) => {
    const user = await User.findOne({ email: req.body.userEmail });

    try {
        const match = await bcrypt.compare(req.body.userPassword, user.password);

    if (match) {
        const token =jwt.sign(
            {id: user._id}, 
            process.env.USER_SECRET,
            {expiresIn: process.env.USER_SECRET_IN}
        )
        
        const cookieOptions = {
            expires: new Date(
                Date.now() + process.env.USER_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
        }
        res.cookie('userCookie', token, cookieOptions);
        res.json({
            message: "logged in",
        })
        console.log('Kerrigan', token);
        };
        } catch (error) {
            res.send('error at login');
            console.log(error)
        } 
        
});
 
app.get('/logout', check.logout, (req, res) => {
    res.json({ message: 'please work' });
});

// Port
const Port = 5000;

app.listen(Port, () => {
    console.log("Server is running on Port " + Port);
});