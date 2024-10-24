// const inputbox = document.getElementById("inputbox");
// const listcontainer = document.getElementById("listcontainer");
// let currentEdit = null; 

// function addTask() {
//     if (inputbox.value === '') {
//         alert("Task name cannot be empty!");
//         return;
//     }

//     if (currentEdit) {
//         currentEdit.firstChild.textContent = inputbox.value; 
//         currentEdit = null; 
//     } else {
//         let li = document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.insertBefore(li, listcontainer.firstChild);
//         let span = document.createElement("span");
//         span.innerHTML = "\u00d7";
//         li.appendChild(span);
        
//     }

//     inputbox.value = '';
//     saveData();
// }

// listcontainer.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//         if (currentEdit) {
           
//             currentEdit.firstChild.textContent = inputbox.value; 
//             currentEdit.classList.toggle("checked"); 
//             currentEdit = null; 
//         } else {
            
//             e.target.classList.toggle("checked");
//         }
//         saveData();
//     } else if (e.target.tagName === "SPAN") {
        
//         e.target.parentElement.remove();
//         saveData();
//     }
// }, false);


// function saveData() {
//     localStorage.setItem("data", listcontainer.innerHTML);
//     const tasks = Array.from(listcontainer.children);
//     tasks.reverse().forEach(task => listcontainer.appendChild(task));
// }

// function showTask() {
//     listcontainer.innerHTML = localStorage.getItem("data");
// }

// showTask();

// listcontainer.addEventListener("dblclick", function (e) {
//     if (e.target.tagName === "LI") {
//         currentEdit = e.target; 
//         inputbox.value = currentEdit.firstChild.textContent; 
//     }
// });


const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");
let currentEdit = null; 

function addTask() {
    if (inputbox.value === '') {
        alert("Task name cannot be empty!");
        return;
    }

    if (currentEdit) {
        currentEdit.firstChild.textContent = inputbox.value; 
        currentEdit = null; 
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.insertBefore(li, listcontainer.firstChild);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputbox.value = '';
    saveData();
}

listcontainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        if (currentEdit) {
            currentEdit.firstChild.textContent = inputbox.value; 
            currentEdit.classList.toggle("checked"); 
            currentEdit = null; 
        } else {
            e.target.classList.toggle("checked");
        }
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data");
    const tasks = Array.from(listcontainer.children);
    tasks.reverse().forEach(task => listcontainer.appendChild(task));
}

showTask();

listcontainer.addEventListener("dblclick", function (e) {
    if (e.target.tagName === "LI") {
        currentEdit = e.target; 
        inputbox.value = currentEdit.firstChild.textContent; 
    }
});
