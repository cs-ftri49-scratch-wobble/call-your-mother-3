const express = require("express");

const app = express();
//runs on a the port provided by hosting service. If not provided, runs on 8080
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("server running on port "+PORT))

app.get('/', (req, res) => {
    res.status(200).json("Hello from the backend!")
})