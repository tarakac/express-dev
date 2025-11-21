import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Hello from Express inside a Dev Container!" , name : "Taraka Nanda Deepthi Chennupati" });
});

app.get("/health", (req, res) => {
  res.status(200).send("healthy");
});

app.get("/math/circle/:radius", (req, res) => {
  const r = Number(req.params.radius);

  const area = Math.PI * r * r;
  const circumference = 2 * Math.PI * r;

  res.json({
    radius: r,
    area,
    circumference,
  });
});

app.get("/math/rectangle/:length/:width", (req, res) => {
  const length = Number(req.params.length);
  const width = Number(req.params.width);

  res.json({
    length,
    width,
    area: length * width,
    perimeter: 2 * (length + width),
  });
});

app.get("/math/power/:base/:exponent", (req, res) => {
  const base = Number(req.params.base);
  const exponent = Number(req.params.exponent);

  let result = Math.pow(base, exponent);

  // Optional `root` query param
  if (req.query.root) {
    const root = Number(req.query.root);
    result = Math.pow(result, 1 / root);
  }

  res.json({
    base,
    exponent,
    root: req.query.root || null,
    result,
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});