import { Injectable } from '@angular/core';
import { ResourceParams, ResourceCRUD } from 'ngx-resource';
import { ToDoList } from './../../models/todo';
@Injectable()
@ResourceParams({
    url: 'api/todolist'
})


export class ToDoListRes extends ResourceCRUD<any, any, any> {}