"use strict";
let express = require('expess')
let app = express;

app.set('port',process.env.port||8000);
app.use(express.static('public'));

app.listen(post, ()=>console.log(`Resume starts on port ${port}`));