const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const sendEmail = require('./sendEmail');
const axios = require("axios");
const defineRoutes = require('./AllController');

const app = express();




app.use(cors({
    origin: ["http://localhost:3000", "https://shabanbuja.onrender.com", "https://banibuja.github.io", "https://shabanbuja.info"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.options('/sendEmailContactUs', cors({
  origin: ["http://localhost:3000", "https://shabanbuja.onrender.com", "https://banibuja.github.io", "https://shabanbuja.info"],
  methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(cookieParser());
app.use(bodyParser.json());

defineRoutes(app);

app.post('/sendEmailContactUs', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://banibuja.github.io", "https://shabanbuja.info");
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
}, sendEmail.sendEmailContactUs);

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
