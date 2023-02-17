import icon from "../src/asset/add icon.png";
import "./style.css";


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
export const addBtn = document.createElement("button")
addBtn.classList.add("addBtn")
export const btnIcon = document.createElement("img")
btnIcon.src = icon
addBtn.appendChild(btnIcon)
export const footer = document.createElement("div")
footer.classList.add("footer")




//for side bar======================================================
export const sidebarTitle = document.createElement("h2")
sidebarTitle.innerText = "Project"
sidebar.appendChild(sidebarTitle)

export const projDiv = document.createElement("div")
projDiv.classList.add("projDiv")
sidebar.appendChild(projDiv)
projDiv.append(addBtn)

export const projectList = document.createElement("ul")
projectList.classList.add("projectList")
//export const project = document.createElement("li")


//==========================================================


export const projectInput = document.createElement("input")
projectInput.classList.add("projectInput")
projectInput.placeholder = "name of project"
export const createBtn = document.createElement("button")
createBtn.classList.add("createBtn")
createBtn.innerText = "create"
export const backBtn = document.createElement("button")
backBtn.classList.add("backBtn")
backBtn.innerText = "x"
export const pjCreateDiv = document.createElement("div")
pjCreateDiv.classList.add("createDiv")
pjCreateDiv.append(createBtn)
pjCreateDiv.append(backBtn)
//=================task in project=============================================

export const optionDiv = document.createElement("div")
optionDiv.classList.add("optionDiv")
export const addOption = document.createElement("button")
addOption.innerText = "Add"
export const cancelOption = document.createElement("button");
cancelOption.innerText = "Cancel"
optionDiv.appendChild(addOption)
optionDiv.appendChild(cancelOption)

export const taskContentDiv = document.createElement("div")
taskContentDiv.classList.add("taskContent")
content.appendChild(taskContentDiv)


export const descriptionInput = document.createElement("input")
descriptionInput.classList.add("description")
descriptionInput.placeholder = "TITLE"
export const dueDateInput = document.createElement("input")
 dueDateInput.classList.add("date")
 dueDateInput.type = "date"
 export const notes = document.createElement("textarea")
notes.classList.add("notes")
export const checklist = document.createElement("input")
export const priorityOptions = document.createElement("ul")
priorityOptions.classList.add("priority")
priorityOptions.innerHTML = "<li>Low</li><li>Mid</li><li>High</li>"
taskContentDiv.appendChild(descriptionInput)
taskContentDiv.appendChild(notes)
taskContentDiv.appendChild(priorityOptions)
taskContentDiv.appendChild(dueDateInput)
taskContentDiv.appendChild(optionDiv)
checklist.type = "checkbox"







export const projectName = document.createElement("h2")






backBtn.addEventListener("click", ()=>{
projDiv.removeChild(projectInput)
projDiv.removeChild(pjCreateDiv)
projDiv.append(addBtn)
addBtn.style.display = "inline"

})




export const priorities = priorityOptions.querySelectorAll("li")



