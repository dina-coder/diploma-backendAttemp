const express = require('express');
const mongoose = require('mongoose');
require('./app/models');
const config = require('./config');
const cors = require('cors');

const app = express();
app.use(cors())
mongoose.set('useFindAndModify', false);

config.express(app);
config.routes(app);

const {appPort, mongoUri} = config.app;

mongoose.connect(mongoUri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(
        appPort,
        () => console.log(`Listening on port ${appPort} ...`),
    ))
    .catch(err => console.error(`Error connecting to mongo: ${mongoUri},`, err))
