const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.text({
    type: "*/*",
    limit: "25mb"
}));

app.get("/", (req, res) => {

    res.json({
        service: "Snapshot Renderer",
        status: "running"
    });

});

app.post("/render", (req, res) => {

    const svg = req.body || "";

    console.log("SVG Length:", svg.length);

    res.json({

        success: true,

        received: svg.length,

        message: "SVG received successfully"

    });

});

app.listen(PORT, () => {

    console.log("Server running on " + PORT);

});
