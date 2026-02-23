const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("蜜汁小餐厅后端运行中 🚀");
});

app.post("/order", (req, res) => {
    console.log("收到订单：");
    console.log(req.body);

    res.json({ message: "订单收到！" });
});

app.listen(3000, () => {
    console.log("服务器运行在 http://localhost:3000");
});