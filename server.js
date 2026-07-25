const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.text({
    type: "*/*",
    limit: "20mb"
}));

app.get("/", (req, res) => {
    res.send("Snapshot Renderer is Running 🚀");
});

app.post("/render", (req, res) => {

    console.log(req.body);

    res.json({
        success: true,
        length: req.body.length
    });

});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
