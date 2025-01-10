class todoItem {
    constructor(title, notes, dueDate, priority, checklist){
        this.title = title;
        this.notes = notes; 
        this.dueDate = dueDate; 
        this.priority = priority; //can be changed to color red, yellow, or light blue 
        this.checklist = checklist; //array of checklist items
    }

}

/*i have a todo object, now what do i do?
    I should be able to add a todo 
    I should be able to update these
        update title
        update notes
        update dueDate
        update priority
        update checklist
    I should be able to delete these
        delete todo item
        delete checklist item
        delete project
    I should be able to see them be sorted by due date //maybe an array of items that are sorted by due date
    
    
    
    
    
    
    */