import {Component, OnInit} from '@angular/core';
import { ToDoListRes } from './ToDoService';
import { ToDoList } from './../../models/todo';
@Component({
  selector: 'swap-list',
  templateUrl: 'app/components/swap-list/swap-list.component.html',
  styles: [`
    div.scroll-list {
      overflow: auto;
      max-height: 70vh;
    }

    .drag-over {
      border: #ff525b dashed 2px;
    }

    .drag-hint {
      border: #ffc100 dashed 2px;
      /*transition: all .2s ease-in-out;*/
      /*transform: scale(1.05);*/
    }

    .drag-target-border {
      border: #00bfff dashed 2px;
    }

    .list-color{
        background-color:#ddd;
    }
  `
  ]
})
export class SwapListComponent implements OnInit {
    constructor(private toDoListRes:ToDoListRes){}

    ngOnInit():any {
        this.refresh();
    }
    toDoList:any;
    newFilter:string;
    onholdFilter:string;
    inProgressFilter:string;
    doneFilter:string;
    // list1 = [
  //   {name: 'Toyota'},
  //   {name: 'Bugati'},
  //   {name: 'Suzuki'}
  // ];

  // list2 = [
  //   {name: 'Mercedes'},
  //   {name: 'Honda'},
  //   {name: 'BMW'}
    // ];
    changeFilter(from:string){

    }
    createNewTask(){
        console.log("sadsad");
    }
    refresh(){
        this.toDoListRes.query()
            .$observable.subscribe((res:any[]) => {
                this.toDoList = res;
            });
    }
    updateToDo(obj:ToDoList, updates:any){
        let data:any;
        data = {};
        data['id']=obj['_id'];
        for(let update in updates) {
            if(obj[update]){
                obj[update] = updates[update];
                data[update]=updates[update];
            }
        }
        this.toDoListRes.update(data)
        .$observable.subscribe((res:any) => {
            this.refresh();
        });
    }
    onDrop(e: any, status:string) {
        if(e.dragData.status!=status){
            this.updateToDo(e.dragData, {"status":status});
        }
    }

  // onList2Drop(e: any) {
  //   this.list2.push(e.dragData);
  //   this.removeItem(e.dragData, this.list1)
  // }


  removeItem(item: any, list: Array<any>) {
    let index = list.map(function (e) {
      return e.name
    }).indexOf(item.name);
    list.splice(index, 1);
  }
}
