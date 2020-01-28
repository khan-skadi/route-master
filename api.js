const express = require("express");
const app = express();

app.use(express.json());

const routes = [
  { id: 1, name: "route1" },
  { id: 2, name: "route2" },
  { id: 3, name: "route3" }
];

app.get("/", (req, res) => {
  res.send("Hello World!!!");
});

app.get("/api/routes", (req, res) => {
  res.send(routes);
});

app.post("/api/routes", (req, res) => {
  if (!req.body.name || req.body.name.length < 3) {
    res.status(400).send("Name is required and should be minimum 3 characters");
    return;
  }
  const route = {
    id: routes.length + 1,
    name: req.body.name
  };
  routes.push(route);
  res.send(route);
});

app.get("/api/routes/:id", (req, res) => {
  const route = routes.find(r => r.id === parseInt(req.params.id));
  if (!route)
    res.status(404).send("The route with the given id was not found.");
  res.send(route);
});

app.put("/api/routes/:id", (req, res) => {
  const route = routes.find(r => r.id === parseInt(req.params.id));
  if (!route)
    res.status(404).send("The route with the given id was not found.");

  route.name = req.body.name;
  res.send(route);
});

app.delete("/api/routes/:id", (req, res) => {
  const route = routes.find(r => r.id === parseInt(req.params.id));
  if (!route)
    res.status(404).send("The route with the given id was not found.");

  const index = routes.indexOf(route);
  routes.splice(index, 1);

  res.send(route);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
