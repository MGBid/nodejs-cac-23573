// Generalmente la constante se llama como el módulo
const express = require("express");

// se puede llamar server, app, etc. LLamamos a la función. Creamos una instancia de express, ya tenemos el servidor creado
const app = express();

// middleware
app.use(express.static("public"));

// Poner una ruta para que empiece a mostrar algo
app.get("/", (req, res) => {
  res.send("¡¡¡Hello Express!!!");
});

app.get("/otra-page", (req, res) => {
  res.sendFile(__dirname + "/public/otra-page.html");
});

app.get("/contacto", (req, res) => {
  res.send("Contacto");
});

app.get("/politicas", (req, res) => {
  // acá primero chequearíamos credenciales y condiciones
  // Muchas funciones necesitan rutas absolutas porque no aceptan rutas relativas
  // sendFile necesita una ruta absoluta, para eso usamos el __dirname
  // dirname me trae la ruta absoluta a la carpeta donde está el proyecto
  // Esto lo hacemos cuando queremos que el archivo sea privado como por ej facturas o pdfs de estudios médicos
  // donde tengo que tener cierto control de a quién se lo muestro
  res.sendFile(__dirname + "/politicas.html");
});

const PORT = process.env.PORT || 3000;

// nos ponemos a escuchar en ese puerto. La función callback nos va a avisar cuando se levanta el servidor
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
