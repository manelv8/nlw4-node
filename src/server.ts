import "reflect-metadata";
import express from "express";
import "./database";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.get("/", (request, response) => {
  return response.json({ message: " hello" });
});

app.post("/", (request, response) => {
  return response.json({ message: "dados salvos" });
});

app.listen(3000, () => {
  console.log("server is running");
});
