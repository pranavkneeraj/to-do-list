/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import express = require("express");
import ToDoListBusiness = require("./../app/business/ToDoListBusiness");
import IBaseController = require("./BaseController");
import IToDoListModel = require("./../app/model/interfaces/ToDoListModel");

class ToDoListController implements IBaseController <ToDoListBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {
            var toDoList: IToDoListModel = <IToDoListModel>req.body;
            var toDoListBusiness = new ToDoListBusiness();
            toDoListBusiness.create(toDoList, (error, result) => {
                if(error) res.send({"error": error});
                else res.send({"status": "success", 'data':result});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var toDoList: IToDoListModel = <IToDoListModel>req.body;
            var _id: string = req.params._id;
            var toDoListBusiness = new ToDoListBusiness();
            toDoListBusiness.update(_id, toDoList, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var toDoListBusiness = new ToDoListBusiness();
            toDoListBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": result});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var toDoListBusiness = new ToDoListBusiness();
            toDoListBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var toDoListBusiness = new ToDoListBusiness();
            toDoListBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = ToDoListController;