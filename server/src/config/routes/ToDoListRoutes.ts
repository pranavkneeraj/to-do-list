/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import ToDoListController = require("./../../controllers/ToDoListController");

var router = express.Router();
class ToDoListRoutes {
    private _toDoListController: ToDoListController;

    constructor () {
        this._toDoListController = new ToDoListController();
    }
    get routes () {
        var controller = this._toDoListController;
        router.get("/todolist", controller.retrieve);
        router.post("/todolist", controller.create);
        router.put("/todolist/:_id", controller.update);
        router.get("/todolist/:_id", controller.findById);
        router.delete("/todolist/:_id", controller.delete);
        return router;
    }


}

Object.seal(ToDoListRoutes);
export = ToDoListRoutes;