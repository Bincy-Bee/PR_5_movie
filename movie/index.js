const express = require('express');
const { db } = require('./config/db');
const { router } = require('./Routes/user.route');
const app = express();
app.use(express.json());
app.use(router)

app.listen(8090,()=>{
    console.log('Server is listening on http://localhost:8090');
    db();
})
