/**
 * Created by Moiz.Kachwala on 15-06-2016.
 */

import DataAccess = require('../DataAccess');
import IToDoListModel = require("./../../model/interfaces/ToDoListModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class ToDoListSchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
                type: String,
                required: true,
                unique:true
            },
          created_date: {
                type: Date,
                default: Date.now
            },
            status: {
                   type: String,
                   enum: ['new', 'onhold', 'inprogress', 'done'],
                   default: 'new'
            },
            priority:{
                    type:Number,
                    enum: [1,2,3,4],
                default:1
            }
        });

        return schema;
    }
}
var schema = mongooseConnection.model<IToDoListModel>("ToDoLists", ToDoListSchema.schema);
export = schema;
