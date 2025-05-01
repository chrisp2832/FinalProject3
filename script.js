document.addEventListener("DOMContentLoaded", function () {
    let hoverableImages = document.querySelectorAll('.hoverable');
    
    hoverableImages.forEach(image => {
        image.addEventListener('mouseover', function () {
            this.style.transform = 'scale(1.1)';
        });

        image.addEventListener('mouseout', function () {
            this.style.transform = 'scale(1)';
        });
    });
});

function updateContent() {
    let nameInput = document.getElementById('nameInput').value;
    let messageInput = document.getElementById('messageInput').value;


    if (nameInput) {
        document.getElementById('greeting').textContent = `Hello, ${nameInput}!`;
    }
    if (messageInput) {
        document.getElementById('message').textContent = messageInput;
    }
}

function addTask() {
    let taskInput = document.getElementById("todoInput").value.trim();
    if (taskInput !== "") {
        let todoList = document.getElementById("todoList");
        let newTask = document.createElement("li");
        newTask.textContent = taskInput;
        todoList.appendChild(newTask);
    }
}
