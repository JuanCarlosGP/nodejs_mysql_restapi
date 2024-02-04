import express from "express";
import employeesRoutes from "./routes/employees.routes.js"
import indexRoutes from "./routes/index.routers.js";

const app = express();

app.use(indexRoutes)
app.use(employeesRoutes);

app.listen(3000);
console.log("Server running on port 3000...");      