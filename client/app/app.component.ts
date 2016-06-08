import {Component} from '@angular/core';
import {MdDialog, MdDialogRef} from '@angular/material';
import { ToDoListRes }  from './components/swap-list/ToDoService';
@Component({
    selector:'my-app',
    templateUrl: './app/app.html',
    styleUrls: ['./app/app.component.css']
})
export class AppComponent {
    constructor(public dialog: MdDialog, public toDoListRes:ToDoListRes) {
        console.log("IN const");
    }
    title = 'Tour of Heroes';
    openCreateTaskModal(){
        let dialogRef = this.dialog.open(ToDoListFormDialog, {
            height: '400px',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result){
                this.toDoListRes.save(result);
            }
        });
    }
}
@Component({
    selector: 'to-do-list-form',
    templateUrl: './app/form.html',
})
export class ToDoListFormDialog {
    constructor(public dialogRef: MdDialogRef<ToDoListFormDialog>) {
        this.todo = {"name":"", "priority":1}
    }
    todo:any;
}