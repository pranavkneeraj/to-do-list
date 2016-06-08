import { Pipe, PipeTransform } from '@angular/core';

import { ToDoList } from './../../models/todo';

@Pipe({ name: 'statusFilterPipe' })
export class StatusFilterPipe implements PipeTransform {
    transform(allToDoList: ToDoList[], status: string) {
        if(!allToDoList) {
            return [];
        }
        return allToDoList.filter(toDoList => toDoList.status==status);
    }
}