/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import ToDoListModel = require("./../model/ToDoListModel");
import IToDoListModel = require("./../model/interfaces/ToDoListModel");
import ToDoListSchema = require("./../dataAccess/schemas/ToDoListSchema");
import RepositoryBase = require("./BaseRepository");

class ToDoListRepository  extends RepositoryBase<IToDoListModel> {
    constructor () {
        super(ToDoListSchema);
    }
}

Object.seal(ToDoListRepository);
export = ToDoListRepository;