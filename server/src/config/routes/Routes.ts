/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */
import express = require('express');
import path = require('path');

import ToDoListRoutes = require('../routes/ToDoListRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new ToDoListRoutes().routes);

        return app;
    }
}
export = Routes;