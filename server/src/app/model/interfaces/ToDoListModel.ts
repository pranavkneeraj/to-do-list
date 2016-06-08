/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import mongoose = require("mongoose");

interface ToDoListModel extends mongoose.Document {
    name: string;
    created_date: Date;
    status: string;
    priority:number;
}

export = ToDoListModel;