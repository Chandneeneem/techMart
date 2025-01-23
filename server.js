//npm run dev
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const routes = require("./routes");
const { default: mongoose } = require('mongoose');
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/techWeb')
    .then(() => console.log("MongoDB Connected: localhost"))
    .catch((err) => console.error("MongoDB connection error:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
