class projectManager {
    constructor() {
        this.projects = [];
    }

    deleteProject(project) {
        const index = this.projects.indexOf(project);
        if (index !== -1) {
            this.projects.splice(index, 1);
        }
    }
}


class project{
    constructor(projectName){ //empty parenthesis because you're making an empty list of todo items without using any parameters
        this.todoItems = [];
        this.projectName = projectName;
    }

    addTodo(todoItem){
        this.todoItems.push(todoItem); //push todoItem to todoItems array
    }

    removeTodo(todoItem){
        const index = this.todoItems.indexOf(todoItem); //find the index of the item
        if (index !== -1){ //-1 means if element is not found
            this.todoItems.splice(index , 1); //start at index and remove 1 items.       NOTE: (index,2) means start at index and remove 2 items
        }
    }

    displayTodos(){
        console.log(this.todoItems); //this.todoItems is already in the class so no parameters for this function
    }

    displayTodo(index){ //passing the index as an argument
        const todoItem = this.todoItems[index] //look for the todoItem in the array
        if (todoItem){ //if it exists then display it
            console.log(todoItem)
        }
        else{
            console.log("Todo item not found");
        }
    }

    sortTodo(){
        this.todoItems.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }

    saveToLocalStorage() {
        localStorage.setItem("project", JSON.stringify(this.todoItems));
    }

    loadFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem("project"));
        if (data) {
            this.todoItems = data.map(item => new todoItem(item.title, item.notes, item.dueDate, item.priority, item.checklist));
        }
    }

    todoDone(todoItemName) {
        
        const index = this.todoItems.findIndex(todo => todo.name === todoItemName); //look into todo items array and find the index of when the todo.name is equal to todoItemName argument

        if (index !== -1) {
            this.todoItems[index].status = 'done';
            console.log(`Todo "${todoItemName}" marked as done.`);
        } else {
            console.log(`Todo "${todoItemName}" not found.`);
        }
    }
}

class todoItem {
    constructor(title, notes, dueDate, priority, checklist){
        this.title = title;
        this.notes = notes; 
        this.dueDate = dueDate; 
        this.priority = priority; //can be changed to color red, yellow, or light blue 
        this.checklist = checklist; //array of checklist items
    }

    updateTitle(newTitle){
        this.title = newTitle;
    }

    updateNotes(newNotes){
        this.notes = newNotes;
    }

    updateDueDate(newDueDate){
        this.dueDate = newDueDate;
    }

    updatePriority(newPriority){
        this.priority = newPriority;
    }
    //UPDATE FUNCTIONS ABOVE CAN BE REFACTORED INTO ONE (keeping the functions above so you can see the improvement)
    updateField(fieldName, newValue){
        if (this.hasOwnProperty(fieldName)){ //if this object has title,notes,dueDate,etc.
            this[fieldName] = newValue; //give this object's property a new value             NOTE: dont use this.fieldName because fieldName is not a property of an object. fieldName is a variable.
        }
        else{
            console.log("Property '${fieldName}' does not exist");
        }
    }


    addChecklistItem(checklistItem){
        this.checklist.push(checklistItem); //push checklistItem to checklist array
    }


    updateChecklistItem(checklistItem, newChecklistItem){
        const index = checklist.indexOf(checklistItem);
        if (index !== -1){
            this.checklist[index] = newChecklistItem;
        } 
    }

    displayChecklist(){
        console.log(this.checklist); //this.checklist is already in the class so no parameters for this function
    }

    removeChecklistItem(checklistItem){
        const index = this.checklist.indexOf(checklistItem); //find the index of the item
        if (index !== -1){ //-1 means if element is not found
            this.checklist.splice(index , 1); //start at index and remove 1 items.       NOTE: (index,2) means start at index and remove 2 items
        }
    }

    checklistItemDone(checklistItemName) {
        // Find the index of the checklist item by its name
        const index = this.checklist.findIndex(item => item.name === checklistItemName);
    
        if (index !== -1) {
            this.checklist[index].status = 'done';
            console.log(`Checklist item "${checklistItemName}" marked as done.`);
        } else {
            console.log("Checklist item not found");
        }
    }
    

    

}





/*i have a todo object, now what do i do?

NOTE: CLASSES GOTTA HAVE THEIR SPECIFIC METHODS
CLI FIRST BEFORE DOM

    I should be able to add a todo (CREATE) 
        A function to add a new to do item :))))))))))
        A function to add a new project with specific to do items :))))))))))

    I should be able to manipulate the DOM and see these items  (READ) A function to display
        Function to display one to do in detail :))))))))))
        Function to display all items :))))))))))

    I should be able to update these (UPDATE)
        update title :))))))))))
        update notes :))))))))))
        update dueDate :))))))))))
        update priority :))))))))))
        update checklist
            A function to add, :))))))))))
            a function to read :))))
            mark as done :)))))))
            remove a checklist item :))))))))

    I should be able to delete these (DELETE)
        delete todo item :))))))))))
        delete checklist item :)))))))))))))))
        delete project :))))))))))))
        
    I should be able to see them be sorted by due date //maybe an array of items that are sorted by due date :)))))))
    I should be able to have a local storage so it saves my data whenever i refresh the page :)))))))
    
    
    -----------------------------------------------------------------------------------------------------------------------------------------

    Next Steps

    Test All Methods
        Ensure methods like sorting, marking checklist items as done, and updates work as expected. :)))))))))

    Polish Features
        Add validation (e.g., prevent adding a todoItem without a title or due date). :)))))))
        Allow users to mark todos as complete. :))))

    
      Implement a Simple UI
        Create HTML forms and buttons for adding, editing, and deleting todoItems and projects. :))))))))
        Use event listeners to connect the UI to your methods.

        ADD TODO ITEM LOGIC 
            Get element and add an event listener for submission. get title and due date value (getElementById and .value) if title and due date exist, create a new todoItem, yada yada)
 
    
    
  
    
    */