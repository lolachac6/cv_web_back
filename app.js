const express = require ('express');
const app= express();
const cors = require('cors');


require('dotenv').config();
require('./db.js');

const apiRouter= require('./routes/api.js');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', apiRouter);

const PORT = process.env.PORT || 3333;
app.listen(PORT,()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
});
