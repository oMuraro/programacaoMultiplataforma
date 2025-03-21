const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const equipmentRouter = require('./routes/equipmentRoutes');
const technicianRouter = require('./routes/technicianRoutes');
const serviceRouter = require('./routes/serviceRoutes');
const maintenanceRouter = require('./routes/maintenanceRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', equipmentRouter);
app.use('/api', technicianRouter);
app.use('/api', serviceRouter);
app.use('/api', maintenanceRouter);

app.listen(port, () => {
    console.log('Servidor iniciado em https://localhost:'+port);
})