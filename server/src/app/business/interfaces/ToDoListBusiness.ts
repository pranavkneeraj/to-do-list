/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import BaseBusiness = require("./../BaseBusiness");
import IToDoListModel = require("./../../model/interfaces/ToDoListModel");

interface ToDoListBusiness extends BaseBusiness<IToDoListModel> {

}
export = ToDoListBusiness;