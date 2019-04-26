const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");
const key = require("../Key").key;

router.post("/getTrainDet", async (req, res) => {
  const { name } = req.body;
  const resp1 = await fetch(`https://api.railwayapi.com/v2/name-number/train/${name}/apikey/${key}/
`);
  const data = await resp1.json();
  console.log(data);
  return res.json(data);
});

router.post("/getPnrStat", async (req, res) => {
  const { PNR } = req.body;
  const resp1 = await fetch(
    `https://api.railwayapi.com/v2/pnr-status/pnr/${PNR}/apikey/${key}/`
  );
  const resp2 = await resp1.json();
  return res.json(resp2);
});

router.post("/", (req, res) => {
  return res.json({ message: "Default POST Route!" });
});

router.get("/", (req, res) => {
  return res.json({ message: "Default Route!" });
});

module.exports = router;
