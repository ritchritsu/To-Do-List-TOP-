// logic.js

class ProjectManager {
    constructor() {
        this.projects = [];
    }

    addProject(projectName) {
        const newProject = new Project(projectName); // make project object
        this.projects.push(newProject); // push the project to projects array
        console.log(`Project "${projectName}" added.`);
    }

    deleteProject(project) {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
        }
    }
}

class Project {
    constructor(projectName) {
        this.todoItems = [];
        this.projectName = projectName;
    }

    addTodo(todoItem) {
        this.todoItems.push(todoItem); // push todoItem to todoItems array
    }

    removeTodo(todoItem) {
        const index = this.todoItems.indexOf(todoItem); // find the index of the item
        if (index !== -1) {
            this.todoItems.splice(index, 1); // start at index and remove 1 item
        }
    }

    displayTodos() {
        console.log(this.todoItems); // this.todoItems is already in the class so no parameters for this function
    }

    displayTodo(index) {
        const todoItem = this.todoItems[index]; // look for the todoItem in the array
        if (todoItem) { // if it exists then display it
            console.log(todoItem);
        } else {
            console.log("Todo item not found");
        }
    }

    sortTodo() {
        this.todoItems.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    saveToLocalStorage() {
        localStorage.setItem("project", JSON.stringify(this.todoItems));
    }

    loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem("project"));
        if (data) {
            this.todoItems = data.map(item => new TodoItem(item.title, item.notes, item.dueDate, item.priority, item.checklist));
        }
    }

    todoDone(todoItemName) {
        const index = this.todoItems.findIndex(todo => todo.title === todoItemName); // look into todo items array and find the index of when the todo.title is equal to todoItemName argument
        if (index !== -1) {
            this.todoItems[index].status = 'done';
            console.log(`Todo "${todoItemName}" marked as done.`);
        } else {
            console.log(`Todo "${todoItemName}" not found.`);
        }
    }
}

class TodoItem {
    constructor(title, notes, dueDate, priority, checklist) {
        this.title = title;
        this.notes = notes;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = checklist;
    }

    updateTitle(newTitle) {
        this.title = newTitle;
    }

    updateNotes(newNotes) {
        this.notes = newNotes;
    }

    updateDueDate(newDueDate) {
        this.dueDate = newDueDate;
    }

    updatePriority(newPriority) {
        this.priority = newPriority;
    }

    updateField(fieldName, newValue) {
        if (this.hasOwnProperty(fieldName)) {
            this[fieldName] = newValue;
        } else {
            console.log(`Property '${fieldName}' does not exist`);
        }
    }

    addChecklistItem(checklistItem) {
        this.checklist.push(checklistItem);
    }

    updateChecklistItem(checklistItem, newChecklistItem) {
        const index = this.checklist.indexOf(checklistItem);
        if (index !== -1) {
            this.checklist[index] = newChecklistItem;
        }
    }

    displayChecklist() {
        console.log(this.checklist);
    }

    removeChecklistItem(checklistItem) {
        const index = this.checklist.indexOf(checklistItem);
        if (index !== -1) {
            this.checklist.splice(index, 1);
        }
    }

    checklistItemDone(checklistItemName) {
        const index = this.checklist.findIndex(item => item.name === checklistItemName);
        if (index !== -1) {
            this.checklist[index].status = 'done';
            console.log(`Checklist item "${checklistItemName}" marked as done.`);
        } else {
            console.log("Checklist item not found");
        }
    }
}

// Instantiate ProjectManager
const projectManagerInstance = new ProjectManager(); //must be projectManagerInstance or other name since theres already a class named projectManager (INSTANCE NAME MUST BE DIFF FROM CLASS NAME)
