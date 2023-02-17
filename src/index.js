import * as dom from "./Dom"
import "./style.css"
import * as pj from "./task.js"



const homepage = () =>{
  dom.header.appendChild(dom.headertitle)
  //container appending
  dom.container.appendChild(dom.header)
  dom.container.appendChild(dom.sidebar)
  dom.container.appendChild(dom.content)
 dom.container.appendChild(dom.footer)
}

  console.log(pj.displayProjectlist())
window.addEventListener("DOMContentLoaded",  pj.displayProjectlist)  
window.addEventListener("DOMContentLoaded",homepage);


dom.addBtn.addEventListener("click", ()=>{
  dom.projDiv.removeChild(dom.addBtn)
   /*projectInput.style.display = "block"
   pjCreateDiv.style.display = "flex"*/
  dom.projDiv.appendChild(dom.projectInput)
  dom.projDiv.appendChild(dom.pjCreateDiv)
   
   
 }, {once:false});

 dom.createBtn.addEventListener("click", ()=>{
  if(dom.projectInput.value !== "" ) {
    dom.sidebar.appendChild(dom.projectList)
    dom.content.appendChild(dom.taskContentDiv)
    dom.projectName.innerText = dom.projectInput.value
    dom.taskContentDiv.insertBefore(dom.projectName, dom.descriptionInput)
    dom.taskContentDiv.style.display = "block"
    pj.addProjectToList()

  }
  });




