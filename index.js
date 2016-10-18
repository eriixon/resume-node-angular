"use strict";
const express = require('express');
const app = express();

app.set('port', process.env.PORT||8000);
app.use(express.static('public'));

app.listen(app.get('port'), () => console.log(`Resume starts on port ${app.get('port')}`));