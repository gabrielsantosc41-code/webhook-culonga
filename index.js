const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {
    console.log("Venda recebida:", req.body);
    res.status(200).send("OK");
});

app.get("/", (req, res) => {
    res.send("Webhook ativo 🚀");
});

app.listen(process.env.PORT || 3000);
