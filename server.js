const express = require("express");
const { Resvg } = require("@resvg/resvg-js");

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

  try {

    const svg = req.body;

    const resvg = new Resvg(svg, {

      fitTo: {
        mode: "original"
      }

    });

    const pngData = resvg.render();

    const pngBuffer = pngData.asPng();

    res.setHeader("Content-Type", "image/png");

    res.send(pngBuffer);

  }

  catch(err){

    console.error(err);

    res.status(500).json({

      success:false,

      error:err.message

    });

  }

});

app.listen(PORT, () => {

  console.log("Renderer running on", PORT);

});
