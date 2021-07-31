// PASO 1:  importar las dependencias o paquetes a utilizar
const express = require("express");
const path = require("path");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");

//CORS Mecanismo de seguridad que permite al servidor indicar el origen del request. Que sólo mi compu y sólo yo decido a quien compartir
var cors = require("cors");
//Agregas el enlace del archivo JSON. Puedes visualizar la infon con GET o CONSOLE.LOG
const datos = require("./api-mkup.json");

// PASO 1.1: definir constantes y datos iniciales
let productos = datos.makeup;

// PASO 2: Generas una aplicacion de express
const app = express();

// PASO3: se define una sub aplicacion de express con sus respectivas rutas.
const router = express.Router();
router.get("/", (req, res) => res.send({ hola: "hola" }));
router.get("/productos", (req, res) => res.send(productos));

// -- Inicia Ejemplo
// app
//    1. router
//        1.1  /   ---- > /.netlify/functions/server
//        1.2 /productos ---- > /.netlify/functions/server/productos
//    2. /
// app.get("/") ----> 2
// -- Fin ejemplo

// PASO 4: incluye funcionalidades que express no trae por defecto

app.use(cors());
app.use(bodyParser.json());
app.use("/.netlify/functions/server/catalogoApi", router); // path must route to lambda
//si quieres cambiar el nombre "server" lo podrás realizar siempre y cuando el nombre de este archivo se llame igual


// //Agregas el enlace del archivo JSON. Puedes visualizar la infon con GET o CONSOLE.LOG
// const makeupJson = require("../api-mkup.json");

// app.get("/makeupS", (req, resp) => {
//   resp.json(productos.makeup[0].product_name);
// });


// //ruta del servicio
// app.get("/catalogo", (req, response) => {
//   response.send(productos);
// });

// app.get('/catalogo/:id', function (req, res) {
//     const item = productos.makeup.find( (producto) => {
//         return (producto._id === req.params.id)
//     })
//     res.json(item)
//   });

// app.get("/maquillaje", (req, response) => {
//     response.send(maquillaje, maquillaje2);
//   });

// app.get("/brochas", (req, response) => {
//   response.send(brochas, brochas2);
// });

// app.get("/pestañas", (req, response) => {
//   response.send(pestanas, pestanas2);
// });


// PASO 5: exportarmos la aplicacion
module.exports = app;
// PASO 6: exporta el servidor express en funcion
module.exports.handler = serverless(app);

