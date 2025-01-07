import express from "express"
import { config } from "./config/index.js"

const app = express()

app.get("/health", (_, res) => {
  res.send({ "response": "OK" })
})

app.listen(config.PORT, () => { console.log("Server started on port 8080") })