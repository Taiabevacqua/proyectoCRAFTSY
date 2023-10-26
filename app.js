const express = require('express');
const path = require('path');
const app = express();


const PORT = 3030;

app.use(express.static(path.join(__dirname,'/public')));


app.get('/',(req,res) => res.sendFile(path.join(__dirname,'views','home.html')))


app.listen(3030, () => console.log(`Server running in http://localhost:${PORT}`))