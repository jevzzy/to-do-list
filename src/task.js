import * as dom from "./Dom.js";
import "./style.css"

export class project {
  constructor(name){
    this.name = name;
    this.task = []
  }
}


export class Task {
    constructor(title,notes,priority,date){
        this.title = title;
        this.notes = notes;
        this.priority = priority;
        this.date = date
    }
    
}



export let projects = JSON.parse(localStorage.getItem("projects")) || []























