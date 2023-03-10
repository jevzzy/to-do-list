import * as dom from "./Dom.js"
import * as tsk from "./task.js"
import delicon from "../src/asset/delete.png"
import editicon from "./asset/icons8-pencil-30.png"



export function addProjectToList (){
    const newProject = new tsk.project(dom.projectInput.value)
    tsk.projects.push(newProject)
     /*projectArray.push()*/
    displayProjectlist()
   }
 
let indexs;
   export const displayProjectlist = ()=>{
    /*for(const child of projectList.children) {
     child.remove()
   console.log(child)
    }*/
    dom.projectList.textContent = ""
     for(let i = 0;i < tsk.projects.length; i++){
       const project = document.createElement("li")
       project.className = "projects"


       project.innerHTML = `<h4>${tsk.projects[i].name}</h4>`
       dom.projectList.appendChild(project)
       dom.sidebar.insertBefore(dom.projectList, dom.projDiv)
       const delBtn = document.createElement("img")
       delBtn.setAttribute("data-index", i)
       
       delBtn.className = "delete"
       delBtn.src = delicon
       project.append(delBtn)
       //==================================
    delBtn.addEventListener("click", (e)=>{
   let index = e.target.dataset.index
   tsk.projects.splice(index, 1)
   displayProjectlist()
   displayTaskList()
    })
     console.log(tsk.projects)
     } 
   
     }

     export const createNewTask = () => {
  
        const title = dom.titleInput.value
        const note = dom.notes.value
        const date = dom.dueDateInput.value
    const newTask = new tsk.Task(title,note,dom.priority,date)
    tsk.projects.forEach(project=>{
      if(project.name == dom.contentTitle.innerText){
    
        project.task.push(newTask)
        displayProjectlist()
      }
    })
    
    }


    export function displayTaskList(){
        tsk.projects.forEach(project=>{
          if(project.name === dom.contentTitle.innerText){
               dom.taskLists.textContent = ""
              const tasks = project.task
              console.log(tasks)
              for (const task in tasks){
                const taskList = document.createElement("li")
                taskList.className = "taskList"
               taskList.setAttribute("data-index", task)
                const checkbox = document.createElement("input")
                checkbox.type = "checkbox"
                checkbox.className = "check"
               taskList.appendChild(checkbox)
                const content = document.createElement("h2")
                content.innerText = `${tasks[task].title}`
                taskList.append(content)
              dom.taskLists.appendChild(taskList)
             const deleteTaskBtn = document.createElement("img")
             deleteTaskBtn.className = "deleteT"
             deleteTaskBtn.src = delicon
            const editBtn = document.createElement("img")
            editBtn.src = editicon
            editBtn.className = "editBtn"
     const taskOption = document.createElement("div")
     taskOption.className = "taskopt"
taskOption.append(deleteTaskBtn)
taskOption.append(editBtn)
taskList.appendChild(taskOption)
//delete task ============================================
            deleteTaskBtn.addEventListener("click", ()=>{
             let index = taskList.dataset.index
            
             tasks.splice(index, 1)
             console.log(tasks)
             displayTaskList()
            })
              console.log(tasks)
//edit task button

              editBtn.addEventListener("click",()=>{


                let index = taskList.dataset.index
                indexs = index
                dom.editTitle.value = tasks[index].title
                dom.editNote.value = tasks[index].note
                dom.editDate.value = tasks[index].date
                    dom.modal.style.display = "block"
                    dom.editTaskDiv.style.display = "block"
                    dom.modal.appendChild(dom.editTaskDiv)
                    dom.content.appendChild(dom.modal)
              })

              }
          }
        })
      
      }
      
        
      
 
 
      
export function editTask(){
    const lists = dom.taskLists.querySelectorAll("li")
   tsk.projects.forEach(project=>{
    if(project.name === dom.contentTitle.innerText){
         dom.taskLists.textContent = ""
        const tasks = project.task
       tasks[indexs].title =  dom.editTitle.value 
        tasks[indexs].note = dom.editNote.value 
        tasks[indexs].date = dom.editDate.value 
     console.log(tasks[indexs])
  lists[indexs].textContent = ""
  dom.editTaskDiv.style.display = "none"
  dom.modal.style.display = "none"
    }})
   displayTaskList()
}


