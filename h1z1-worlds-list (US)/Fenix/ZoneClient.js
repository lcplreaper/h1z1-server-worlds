const h1serv = require("h1z1-server");

var Zone = new h1serv.ZoneClient(
  "127.0.0.1",
  1127,
  "Fenix",
  2,
  "ok",
  "udp9",
  "0.2",
  6782
);

Zone.connect();
