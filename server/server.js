import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import cors from "cors";
import ticketsRouter from './routes/ticketsRoutes.js';
import cartRouters from './routes/cartRoutes.js';

//configure env
dotenv.config();

//databse config
connectDB();

// const storage = multer.memoryStorage(); // Store files in memory
// const upload = multer({ storage });



//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Use multer middleware to handle file uploads
// app.use(upload.single('file'));
app.use('/uploads', express.static('uploads'));


//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);
app.use("/api/v1/user", userRoutes);
app.use('/api/v1/tickets', ticketsRouter);
app.use('/api/v1/cart', cartRouters);

//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
