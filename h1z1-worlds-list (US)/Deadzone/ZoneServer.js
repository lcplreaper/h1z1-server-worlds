const h1serv = require("h1z1-server");

var Zone = new h1serv.ZoneServer(1122, "Deadzone", false);

Zone.start();
