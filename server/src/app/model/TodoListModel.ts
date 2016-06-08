/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import IToDoListModel = require('./interfaces/ToDoListModel');

class ToDoListModel {
    private _toDoListModel: IToDoListModel;

    constructor(toDoListModel: IToDoListModel) {
        this._toDoListModel = toDoListModel;
    }

    get name (): string {
        return this._toDoListModel.name;
    }

    get created_date (): Date {
        return this._toDoListModel.created_date;
    }

    get status (): string {
        return this._toDoListModel.status;
    }

    get priority (): number {
        return this._toDoListModel.priority;
    }

}
Object.seal(ToDoListModel);
export =  ToDoListModel;