const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();

connectDB();

const userRoutes = require("./routes/userRoutes");
const courseRoute = require("./routes/courseRoutes");

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/instructor", courseRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT,
    console.log(`Server running on port ${PORT}`)
);