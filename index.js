const express = require("express");
//CORS Mecanismo de seguridad que permite al servidor indicar el origen del request. Que sólo mi compu y sólo yo decido a quien compartir
var cors = require("cors");
var app = express();
app.use(cors());
const port = 3003;

//Agregas el enlace del archivo JSON. Puedes visualizar la infon con GET o CONSOLE.LOG
const makeupJson = require("./api-mkup.json");

app.get("/makeupS", (req, resp) => {
  resp.json(makeupJson.makeup[0].product_name);
});


//ruta del servicio
app.get("/catalogo", (req, response) => {
  response.send(makeupJson);
});

app.get('/catalogo/:id', function (req, res) {
    const item = makeupJson.makeup.find( (producto) => {
        return (producto._id === req.params.id)
    })
    res.json(item)
  });

app.get("/maquillaje", (req, response) => {
    response.send(maquillaje, maquillaje2);
  });

app.get("/brochas", (req, response) => {
  response.send(brochas, brochas2);
});

app.get("/pestañas", (req, response) => {
  response.send(pestanas, pestanas2);
});

//El servidor se quedará escuchando
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
