const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();
const PORT = 3000;

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", appointmentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
