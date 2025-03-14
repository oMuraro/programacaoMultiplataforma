const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const equipamentRouter = require('./routes/equipamentRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use('/api', equipamentRouter);

app.listen(port, () => {
    console.log('Servidor iniciado em https://localhost:'+port);
})