// gui.js


// Instantiate ProjectManager
const projectManagerInstance = new ProjectManager(); //must be projectManagerInstance or other name since theres already a class named projectManager (INSTANCE NAME MUST BE DIFF FROM CLASS NAME)


document.addEventListener("DOMContentLoaded", (event) => { //once dom is loaded, run these functions
    addProjectGUI();
    updateProjectSelect();
    deleteProjectGUI();
});

function addProjectGUI() {
    let projectForm = document.getElementById("project-form").addEventListener("submit", (event) => { 
        event.preventDefault(); // prevent page reload on form submit

        const projectNameElement = document.getElementById("project-name").value; // get text value of projectName

        if (projectNameElement) { // if name is valid
            projectManagerInstance.addProject(projectNameElement);
            updateProjectSelect(); // update the project select dropdown
            document.getElementById("project-name").value = ''; // reset the input field
        } else {
            alert("Please enter a project name");
        }
    });
}
/*
function deleteProjectGUI(){
     let deleteProjectButton = document.getElementById("delete-project-btn").addEventListener("click", (event) => { //IF YOU ARE PUSHING A BUTTON DOTN FORGET TO ADD THE EVENT LISTENER
     let selectedProjectElement = document.getElementById("project-select").value; //get value of select element
     projectManagerInstance.deleteProject(selectedProjectElement); //delete that project in the logic
     updateProjectSelect(); // update the project select dropdown (which will loop over the projects again but with a deleted project)
})
} 

THIS IS ALLLL WRONGGG 

Issues in original code:
Event listener was defined inside the function, causing it to add a new listener each time the function runs
Used let instead of const for immutable references
Chained the event listener directly to getElementById which doesn't store the button reference
No error handling
No validation for selected project
*/
// I FORGOT TO ADD EVENT LISTERNER TO THE BUTTON KANINA DONT FORGET

function deleteProjectGUI() {
    const deleteProjectButton = document.getElementById("delete-project-btn"); //get the delete button

    deleteProjectButton.addEventListener("click", () => { //give it an ear to hear clicks, then
        const projectName = document.getElementById("project-select").value; //get the project name (from project-select.value)
        
        if (!projectName) { //if no project selected then throw an alert
            alert("Please select a project to delete"); 
            return;
        }

        try { //try deleting the project using the name
            projectManagerInstance.deleteProject(projectName);
            updateProjectSelect(); //update the selections
        } catch (error) { //else throw an error
            alert(`Error deleting project: ${error.message}`);
        }
    });

}

function updateProjectSelect() {
    const projectSelectElement = document.getElementById("project-select"); // get project-select element
    
    // Clear existing options
    projectSelectElement.innerHTML = '';

    // Loop through all projects and add them to the dropdown
    projectManagerInstance.projects.forEach(project => { 
        const option = document.createElement("option"); // create a new option element
        option.value = project.projectName; // set the value of the option to the project name
        option.textContent = project.projectName; // set the text of the option to the project name
        projectSelectElement.appendChild(option); // append it to project-select
    });
}
