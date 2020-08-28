const h1serv = require("h1z1-server");

var Zone = new h1serv.ZoneClient(
  "127.0.0.1",
  1117,
  "The Journey",
  2,
  "ok",
  "udp9",
  "0.2",
  6782
);

Zone.connect();
