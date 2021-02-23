import express from "express";

const app = express();

app.get("/", (request, response) => {
  return response.json({ message: " hello" });
});

app.post("/", (request, response) => {
  return response.json({ message: "dados salvos" });
});

app.listen(3000, () => {
  console.log("server is running");
});
