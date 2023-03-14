
import * as dom from "./Dom"
import "./style.css"
import * as pj from "./task.js"
import * as tdo from "./todofunctions.js"

const homepage = () =>{
  dom.header.appendChild(dom.headertitle)
  //container appending
  dom.container.appendChild(dom.header)
  dom.container.appendChild(dom.sidebar)
  dom.container.appendChild(dom.content)
 dom.container.appendChild(dom.footer
  )
}
   
window.addEventListener("DOMContentLoaded", ()=>{
  homepage()
  tdo.displayTaskList(tdo.taskz)
} )  


dom.addProjectBtn.addEventListener("click", dom.projectform)

 dom.createProjectBtn.addEventListener("click", dom.createProjectDom );

  dom.cancelProjectBtn.addEventListener("click", dom.clearprojDiv )

dom.createTaskBtn.addEventListener("click", (e)=>{
  dom.modal.style = "none"
 /* dom.taskLists.appendChild(/*dom.taskList)*/
  dom.taskContentDiv.style.display = "none"
  dom.content.appendChild(dom.taskLists
    )
    
  dom.content.appendChild(dom.addMoreTaskBtn)
  tdo.createNewTask()
  let taskx;
dom.projectList.childNodes.forEach(node=>{
if(node.innerText === dom.contentTitle.innerText){
   let index = node.dataset.index
   taskx = pj.projects[index].task
   console.log(taskx)
   tdo.displayTaskList(taskx)
}
})


})


dom.addMoreTaskBtn.addEventListener("click", dom.newTask)


dom.cancelTaskBtn.addEventListener("click", ()=>{
  dom.taskContentDiv.style.display = "none"
 dom.modal.style.display = "none"
})

dom.addEditBtn.addEventListener("click", tdo.editTask)


