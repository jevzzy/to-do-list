import icon from "../src/asset/add icon.png";
import "./style.css";
import * as tdo from "./todofunctions.js"
import icon2 from "../src/asset/correct.png"
import icon3 from "../src/asset/cancel.png"
import { projectLi } from "./todofunctions.js";
//==========================================================
export const container = document.querySelector(".container")
export const header = document.createElement("div")
    header.classList.add("header")
export const headertitle = document.createElement("h2")
headertitle.textContent = "jevzzy to-dO-APP"
export const sidebar = document.createElement("div")
sidebar.classList.add("sidebar")
//content
export const content = document.createElement("div")
content.classList.add("content")
export const footer = document.createElement("div")
footer.classList.add("footer")




//for side bar============================================================
export const addProjectBtn = document.createElement("button")
addProjectBtn.classList.add("addBtn")
export const btnIcon = document.createElement("img")
btnIcon.src = icon
addProjectBtn.appendChild(btnIcon)
export const sidebarTitle = document.createElement("h2")
sidebarTitle.innerText = "Project"
sidebar.appendChild(sidebarTitle)

export const projDiv = document.createElement("div")
projDiv.classList.add("projDiv")
sidebar.appendChild(projDiv)
projDiv.append(addProjectBtn)

export const projectList = document.createElement("ul")
projectList.classList.add("projectList")
//export const project = document.createElement("li")

export const projectInput = document.createElement("input")
projectInput.classList.add("projectInput")
projectInput.placeholder = "name of project"
export const createProjectBtn = document.createElement("button")
createProjectBtn.classList.add("createProjectBtn")
createProjectBtn.innerText = "create"
export const cancelProjectBtn = document.createElement("button")
cancelProjectBtn.classList.add("cancelProjectBtn")
cancelProjectBtn.innerText = "x"
export const pjCreateDiv = document.createElement("div")
pjCreateDiv.classList.add("createDiv")
pjCreateDiv.append(createProjectBtn)
pjCreateDiv.append(cancelProjectBtn)
//=================task in project==========content===================================

export let contentTitle = document.createElement("h1")
contentTitle.className = "c-title"
export const taskContentDiv = document.createElement("div")
taskContentDiv.classList.add("taskContent")
content.appendChild(taskContentDiv)
export const titleInput = document.createElement("input")
titleInput.classList.add("title")
titleInput.placeholder = "TITLE"
export const dueDateInput = document.createElement("input")
 dueDateInput.classList.add("date")
 dueDateInput.type = "date"
 export const notes = document.createElement("textarea")
notes.classList.add("notes")
notes.placeholder = "e.g buy ...."
export const optionDiv = document.createElement("div")
optionDiv.classList.add("optionDiv")
export const createTaskBtn = document.createElement("button")
createTaskBtn.innerText = "Add"
export const cancelTaskBtn = document.createElement("button");
cancelTaskBtn.innerText = "Cancel"
optionDiv.appendChild(createTaskBtn)
optionDiv.appendChild(cancelTaskBtn)
export const priorityOptions = document.createElement("ul")
priorityOptions.classList.add("priority")
priorityOptions.innerHTML = "<li>Low</li><li>Mid</li><li>High</li>"

taskContentDiv.appendChild(titleInput)
taskContentDiv.appendChild(notes)
taskContentDiv.appendChild(priorityOptions)
taskContentDiv.appendChild(dueDateInput)
taskContentDiv.appendChild(optionDiv)
export const modal = document.createElement("div")
modal.className = "modal"
export const taskLists = document.createElement("ul")
taskLists.className = " t-container"
export const addMoreTaskBtn = document.createElement("button")
addMoreTaskBtn.className = "more"
const addMoreTaskicon = document.createElement("img")
addMoreTaskicon.src = icon;
addMoreTaskBtn.appendChild(addMoreTaskicon)

export const priorities = priorityOptions.querySelectorAll("li")

export let priority;
priorities.forEach(prior =>{
    
    prior.addEventListener("click", (e)=>{
        priority = prior.textContent;
        prior.classList.add("scale")
        
    }
    )
 
})
 

//=================DOM -functions=========
export function createProjectDom(){
    if(projectInput.value !== "" ) {
    
        sidebar.appendChild(projectList)
        contentTitle.innerText = `${projectInput.value}`
        content.appendChild(contentTitle)
     content.appendChild(taskContentDiv)
        taskContentDiv.style.display = "block"
        tdo.addProjectToList()
        content.style.display = "block"
        tdo.displayTaskList(tdo.taskz)
       clearprojDiv()
       clearInput()
       
      }
}

export function clearInput(){
    titleInput.value = ""
    notes.value = ""
}

export function newTask(){
    content.appendChild(modal)
  modal.style.display = "flex"
  modal.append(taskContentDiv)
  taskContentDiv.style.display = "block"
  clearInput()
}



export function clearprojDiv(){
    projectInput.value = ""
    projDiv.removeChild(projectInput)
    projDiv.removeChild(pjCreateDiv)
    projDiv.appendChild(addProjectBtn)
  
  }
  
export function projectform(){
projDiv.removeChild(addProjectBtn)
projDiv.appendChild(projectInput)
projDiv.appendChild(pjCreateDiv)
content.innerHTML = ""
}

//========edit form


export const editTaskDiv = document.createElement("div")
 editTaskDiv.className = "edit"
export const editTitle = document.createElement("input")
export const editNote = document.createElement("textarea")
export const editPrior = document.createElement("select")
editPrior.innerHTML = "<option>low</option><option>mid</option><option>high</option>"
export const editDate = document.createElement("input")
editDate.type = "date";
export const cancelEditBtn = document.createElement("img")
cancelEditBtn.src = icon3
cancelEditBtn.className = "canceledit"
export const addEditBtn = document.createElement("img")
addEditBtn.src = icon2
addEditBtn.className = "editBtn"
editTaskDiv.appendChild(editTitle)
editTaskDiv.appendChild(editNote)
editTaskDiv.appendChild(editDate)
editTaskDiv.appendChild(editPrior)
editTaskDiv.appendChild(addEditBtn)
editTaskDiv.appendChild(cancelEditBtn)



