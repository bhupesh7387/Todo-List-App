// Defining Required Functions
function addTask() {
    if (taskInp.value != "") {
        let task = document.createElement("li")
        task.setAttribute("class", "task")
        task.innerHTML = `<input type="checkbox" id="taskCompletion"><h2></h2> <button class="deleteTask">x</button>`
        task.childNodes[1].textContent = taskInp.value;
        tasksContainer.appendChild(task)

        let deleteTaskButton = document.querySelectorAll(".deleteTask")

        for (let i = 0; i < deleteTaskButton.length; i++) {
            deleteTaskButton[i].addEventListener("click", (e) => {
                e.target.parentNode.classList.add("deleteTaskAnimate")
                setTimeout(() => {
                    e.target.parentNode.remove()
                }, 750);
            })
        }
    }
}

// Getting Required Elements From DOM
let taskInp = document.getElementById("taskInp")
let addTaskButton = document.getElementById("addTask")
let tasksContainer = document.getElementById("tasksCont")


// Adding EventListeners
addTaskButton.addEventListener("click", addTask)
