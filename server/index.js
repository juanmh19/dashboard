const mysql = require('mysql2');
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'dashboard'
};

const connection = mysql.createConnection(dbConfig);
connection.query('SELECT precio FROM ventas', (error, results, fields) => {
  const sumaDePrecios = results.reduce((acumulador, producto) => acumulador + producto.precio, 0);

  app.get('/ganancias', (req, res) => {
    res.json(sumaDePrecios);
  });
});

let cliente = 0
let clienteAnalizado = new Set()

connection.query("SELECT cliente FROM ventas", (error, results, fields) => {

  results.forEach(clientes => {
    clienteAnalizado.add(clientes.cliente)
    cliente = clienteAnalizado.size;
  });
  app.get("/clientes", (req, res) => {
    res.json(cliente)
  })
})

let usuarios = 0
connection.query("SELECT usuario FROM usuarios", (error, results, fields) => {
  results.forEach(usuario => {
    usuarios++
  });
  app.get("/usuarios", (req, res) => {
    res.json(usuarios)
  })
})

let obtencion = []
connection.query("SELECT * FROM empleados", (error, results, fields) => {
  obtencion = results
  app.get("/empleados", (req, res) => {
    res.json(obtencion)
  })
})

let productos = 0
let tiposProductos = null
let buzos = 0
let camisetas = 0
let remeras = 0
let pantalones = 0
let shorts = 0
let camperas = 0
let coleccionProductos = []
connection.query("SELECT producto FROM ventas", (error, results, fields) => {
  results.forEach(producto => {
    tiposProductos = producto.producto
    if (tiposProductos == "buzo") {
      buzos++
    }
    if (tiposProductos == "camiseta") {
      camisetas++
    }
    if (tiposProductos == "remera") {
      remeras++
    }
    if (tiposProductos == "pantalon") {
      pantalones++
    }
    if (tiposProductos == "short") {
      shorts++
    }
    if (tiposProductos == "campera") {
      camperas++
    }
    coleccionProductos = [buzos, camisetas, remeras, pantalones, shorts, camperas]
    productos++
  });
  app.get("/productos", (req, res) => {
    res.json(productos)
  })
  app.get("/ventas", (req, res) => {
    res.json(coleccionProductos)
  })
})

app.post('/empleados/:id', (req, res) => {
  const empleadoId = req.params.id;
  const nuevosDatos = req.body;
  const sql = 'UPDATE empleados SET sueldo = ?, bono = ?, tarea = ?, experiencia = ? WHERE id = ?';

  // Ejecutar la consulta de actualización
  connection.query(sql, [nuevosDatos.sueldo, nuevosDatos.bono, nuevosDatos.tarea, nuevosDatos.experiencia, empleadoId], (error, results) => {
    if (error) {
      console.error('Error al realizar la actualización:', error);
      return;
    }
    connection.end();
  });
});

/* EQUIPO */
app.listen(5000, () => {
  console.log('Servidor Node.js en ejecución en el puerto 3000');
});

app.delete('/empleados/:id', async (req, res) => {
  const empleadoId = req.params.id;
  console.log(empleadoId)

      connection.query('DELETE FROM empleados WHERE id = ?', [empleadoId]);

});