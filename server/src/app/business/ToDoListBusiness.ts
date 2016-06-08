/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ToDoListRepository = require("./../repository/ToDoListRepository");
import IToDoListBusiness = require("./interfaces/ToDoListBusiness");
import IToDoListModel = require("./../model/interfaces/ToDoListModel");
import ToDoListModel = require("./../model/ToDoListModel");


class ToDoListBusiness implements IToDoListBusiness {
    private _toDoListRepository: ToDoListRepository;

    constructor () {
        this._toDoListRepository = new ToDoListRepository();
    }

    create (item: IToDoListModel, callback: (error: any, result: any) => void) {
        this._toDoListRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._toDoListRepository.retrieve(callback);
    }

    update (_id: string, item: IToDoListModel, callback: (error: any, result: any) => void) {

        this._toDoListRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._toDoListRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._toDoListRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IToDoListModel) => void) {
        this._toDoListRepository.findById(_id, callback);
    }

}


Object.seal(ToDoListBusiness);
export = ToDoListBusiness;