import Express from "express";
import customerRoutes from "./routes/customers.js";
const app = Express();

app.listen(8800, () => {
  console.log("api working");
});

app.use("/api/customers", customerRoutes);
