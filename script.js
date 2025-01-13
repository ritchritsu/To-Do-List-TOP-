class project{
    constructor(){ //empty parenthesis because you're making an empty list of todo items without using any parameters
        this.todoItems = [];
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
            mark as done
            remove a checklist item :))))))))

    I should be able to delete these (DELETE)
        delete todo item :))))))))))
        delete checklist item 
        delete project
        
    I should be able to see them be sorted by due date //maybe an array of items that are sorted by due date
    I should be able to have a local storage so it saves my data whenever i refresh the page
    
    
    
    

    
    */