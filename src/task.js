import { projectList } from "./Dom.js";
import * as dom from "./Dom.js";
import "./style.css"


export class Task {
    constructor(description,notes,priority){
        this.description = description;
        this.notes = notes;
        this.priority = priority
    }
}
export const tasks = []

export const projectArray = []




export function addProjectToList (){
 
    projectArray.push(dom.projectInput.value)
   displayProjectlist()
  }


export const displayProjectlist = ()=>{
 for(const child of projectList.children) {
  child.remove()

 }
 
 
  for(let i = 0;i < projectArray.length; i++){
    
    const project = document.createElement("li")
    project.innerText = `${projectArray[i]} `
    dom.projectList.appendChild(project)
    dom.sidebar.insertBefore(dom.projectList, dom.projDiv)
    
  } 
  }

  


export const createNewTask = () => {
  //  const projectName = DOM.projectInput.value
    const newTaskDescription = DOM.descriptionInput.value
    const newTaskNote = DOM.notes.value
const newTask = new Task(newTaskDescription,newTaskNote,priority)
tasks.push(newTask)
}
