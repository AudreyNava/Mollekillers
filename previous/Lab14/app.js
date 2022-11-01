const express = require('express');
 const bodyParser = require('body-parser');
const path = require('path');
 
 const app = express();
 
 app.use('/robots', rutasRobots);
 
 app.use((request, response, next) => {
    response.status(404);
    response.sendFile(path.join(__dirname, 'views', 'error.html'));
 });
 
 app.listen(3000);